import { LightningElement ,track} from 'lwc';

export default class CopyAddress extends LightningElement {
   @track line1;
   @track line2;
   @track lmark;
   @track zcode;
   
   areDetailsVisible="";

    handleChange(event){
        this.areDetailsVisible=true;
        var inp= this.template.querySelectorAll("lightning-input");
        inp.forEach(function(element){

            if(element.name==="txt1"){
                this.line1=element.value;
            }
            else if(element.name==="txt2"){
                this.line2=element.value;
            }
            else if (element.name==="txt3"){
                this.lmark=element.value; 
            }
            else if (element.name=="txt4"){
                this.zcode=element.value;
               
    }},this);
}
}