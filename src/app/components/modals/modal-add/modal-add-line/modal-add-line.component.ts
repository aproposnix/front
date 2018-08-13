import { Component, OnInit                                  } from '@angular/core';
import { ModalAddComponent                                  } from '../modal-add.component';
import { GlobalText                                         } from '../../../../../texts/global';
import { ConditionCriteriaMapper                            } from '../../../../model/condition-criteria-mapper';

@Component({
  selector: 'app-modal-add-line',
  templateUrl: './modal-add-line.component.html',
  styleUrls: ['./modal-add-line.component.scss']
})
export class ModalAddLineComponent extends ModalAddComponent{
  public checkCriteria = -1;
  public checkDataCriteria = [];

  /**
   * check if the langage has changed
   * or if a select field has changed
   */
  ngDoCheck() {
    if (this.modal != GlobalText.TEXTS) {
      this.modal = GlobalText.TEXTS;
      this.entityDisplayedName = this.data.entity.getDisplayedName();
    } else if (this.oldEntity != this.data.entity) {
      this.checkData();
    }
    if(this.newObject.field_string && (this.checkCriteria != this.newObject.field_string)){
      this.checkDataCriteria = this.loadedData.field_string[this.newObject.field_string-1];
      this.loadedData.condition_string = this.checkCondition(this.checkDataCriteria);
      this.checkCriteria = this.newObject.field_string;
    }
  }

  /**
   * for criteria's table
   * adapt condtion to the selected criteria
   * @param checkData 
   */
  checkCondition(checkData){
    let type = null;
    if(checkData.type)
      type = checkData.type.toLowerCase();

    return ConditionCriteriaMapper.mapConditionCriteria(type);
  }

  //emit the new object
  add():any {
    let newObject = Object.assign({}, this.newObject);
    this.onCreate.emit(this.data.entity.formatFromModalAdd(newObject, this.loadedData));
    this.closeDialog();
  }
}