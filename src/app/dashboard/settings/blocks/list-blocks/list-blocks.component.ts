import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { Block } from 'src/app/shared/models/block';
import { SettingsService } from 'src/app/shared/services/settings.service';
import { CreateBlocksComponent } from '../create-blocks/create-blocks.component';
import { EditBlocksComponent } from '../edit-blocks/edit-blocks.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DeliveryZone } from 'src/app/shared/models/delivery-zone';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-blocks',
  templateUrl: './list-blocks.component.html',
  styleUrls: ['./list-blocks.component.scss']
})
export class ListBlocksComponent implements OnInit {

  public blocks: Block[] = [];
  confirmDialogRef!: MatDialogRef<ConfirmComponent> | null;
  zones!: DeliveryZone[];
  range = new FormGroup({
    country: new FormControl< null | string>('Nigeria'),
  });

  constructor(
    private settingsService: SettingsService,
    public _matDialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.blocks = this.route.snapshot.data['blocks'] as Block[]
    this.zones = this.route.snapshot.data['zones'] as DeliveryZone[];
    this.range.valueChanges.subscribe((data) => {
      this.settingsService.getBlocks(data).subscribe((blocks) => {
        this.blocks = blocks;
      })
   })
  }

  changeCurrency(event: any) {
    const delivery = this.zones.find((delivery) => delivery.country == event.value)
    
  }

  delete(index: number, id: any) {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false
    });
    this.confirmDialogRef.componentInstance.title = 'Delete Block?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete this Block?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.blocks.splice(index, 1)
        this.settingsService.deleteBlock(id).subscribe()
      }
      this.confirmDialogRef = null;
    });
  }

  addNewBlock() {
    let addBlockForm = this._matDialog.open(CreateBlocksComponent, {
      width: '800px',
      disableClose: false,
      data: { zones: this.zones }
    });
    addBlockForm.afterClosed().subscribe(result => {

      if (result) {
        this.settingsService.getBlocks(this.range.value).subscribe((blocks) => {
          this.blocks = blocks;
        })
      }
    });
  }


  onChange(block: Block, event: MatSlideToggleChange) {
    this.settingsService.updateBlock(block._id, {active: event.checked}).subscribe(() => {
      this._matDialog
    })
  }

  public viewDetails(block: Block) {
    let addBlockForm = this._matDialog.open(EditBlocksComponent, {
      data:  { zones: this.zones, block },
      width: '800px',
      disableClose: false,
      
    });
    addBlockForm.afterClosed().subscribe(result => {

      if (result) {
        this.settingsService.getBlocks(this.range.value).subscribe((blocks) => {
          this.blocks = blocks;
        })
      }
    });
  }

  drop(event: CdkDragDrop<string[]>) {
  
    moveItemInArray(this.blocks, event.previousIndex, event.currentIndex);
     this.blocks.forEach((block, i) => {
       this.settingsService.updateBlock(block._id, {position: i}).subscribe()
    })
    
  
    
  }


}
