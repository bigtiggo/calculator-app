export default class Calculator{
    constructor(){
        this.reset();
    }
    reset(){
        this.currentvalue='0';
        this.previousvalue=null;
        this.operator=null;
    }
    delete(){
        this.currentvalue=this.currentvalue.slice(0,-1)||'0';
    }
    appendNumber(num){
        if(num==='.'&& this.currentvalue.includes('.'))return;
        this.currentvalue=this.currentvalue==='0'&& num!=='.'?num:this.currentvalue+num;
    }
    chooseOperator(op) {
        if (this.operator !== null && this.previousvalue !== null) {
            this.compute();
        }
        this.operator = op;
        this.previousvalue = this.currentvalue;
        this.currentvalue = '0';
    }
    
    compute() {
        const prev = parseFloat(this.previousvalue);
        const curr = parseFloat(this.currentvalue);
        if (isNaN(prev) || isNaN(curr)) return;
    
        switch (this.operator) {
            case '+':
                this.currentvalue = (prev + curr).toString();
                break;
            case '-':
                this.currentvalue = (prev - curr).toString();
                break;
            case '*':
                this.currentvalue = (prev * curr).toString();
                break;
            case '/':
                this.currentvalue = (curr !== 0 ? (prev / curr).toString() : 'Error');
                break;
        }
    
        this.operator = null;
        this.previousvalue = null;
    }
    
}