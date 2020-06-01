class Form{
    constructor(){
        this.title = createElement('h2');
        this.email = createInput("E-Mail");
        this.name = createInput("Name");
        this.q1 = createElement("h3");
        this.q2 = createElement("h3");
        this.q3 = createElement("h3");
        this.submit = createButton("Submit");
        this.radio1 = createRadio("h3");
        this.radio2 = createRadio("h3");
        this.radio3 = createRadio("h3");
        this.radio1.option("YES");
        this.radio1.option("NO");
        
        this.radio2.option("YES");
        this.radio2.option("NO");
        this.radio3.option("100");
        this.radio3.option("500");
        this.radio3.option("1000");
        this.radio3.option("More");
        
    }

    display(){
        this.title.html("A SURVEY TO BRING ABOUT CHANGE");
        this.title.position(200,20);  

        this.email.position(200,100);
        this.name.position(200,130);

        this.q1.html("Q1. Do you think we need to have free lunch meals in our school canteen for the kid kids who are very poor?")
        this.q1.position(200,200);
        this.radio1.position(200,250);
        

        this.q2.html("Q2. Would you be willing to contribute a small amount every month for such a program?")
        this.q2.position(200,300);
        this.radio2.position(200,350);


        this.q3.html("Q3. How much per month would you be willing to pay?")
        this.q3.position(200,400);
        this.radio3.position(200,450);



        
        this.submit.position(200,500);
        this.submit.mousePressed(()=>{
            
            database.ref('form').set({
               email :  this.email.value(),
               name : this.name.value(),
               q1 : this.radio1.value(),
               q2 : this.radio2.value(),
               q3 : this.radio3.value()
              
            })
            form.hide();
        })

        
    }

    hide(){
        this.title.hide();
        this.email.hide();
        this.name.hide();
        this.q1.hide();
        this.q2.hide();
        this.q3.hide()
        this.radio1.hide();
        this.radio2.hide();
        this.radio3.hide();
        this.submit.hide();
        textSize(50);
        fill("blue")
        text("Thank You " + this.name.value() + "!",200,200)
    }
}