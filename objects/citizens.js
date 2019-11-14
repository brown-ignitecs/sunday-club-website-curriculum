function ASCIItoHTML(str){
	let last_result = str;
	let result = str.replace(" ","&nbsp");
	while(last_result !== result){
		last_result = result;
		result = last_result.replace(" ","&nbsp");
	}
	return result;
}

class Person {
	constructor(name, age, says, head, eyes, mouth, arm) {
		this.name = name;
		this.age = age;
		this.says = says;
		this.head = head;
		this.eyes = eyes;
		this.mouth = mouth;
		this.arm = arm;
		let person_div = document.querySelector('#citizens').appendChild(document.createElement("div"));
		person_div.setAttribute("id",this.name);
		person_div.setAttribute("class", "column");
		person_div.innerHTML  = this.drawPerson();
	}
	drawSpeach(){
		let top_perimeter = "<div>/";
		let bottom_perimeter = "<div>\\";
		let perimeter = ""
		for(let i = 1; i < this.says.length - 1; i+=1){
			perimeter += "~";
		}
		top_perimeter += perimeter + "\\</div>";
		bottom_perimeter += perimeter + "/</div>";
		let middle = "<div>" + this.says + "</div>"
		return top_perimeter + middle + bottom_perimeter;
	};
	drawPersonFigure(){ 
		let stick_figure = "";
		if(this.head === "bald"){
			stick_figure += "  ___";
		} else if(this.head === "bunny"){
			stick_figure += " ()_()";
		} else if(this.head === "bow"){
			stick_figure += " |>0<|";
		} else {
			alert("Invalid head!");
		}
		stick_figure += "</br>";
		if(this.eyes === "open"){
			stick_figure += "/ 0 0 \\";
		} else if(this.eyes === "closed"){
			stick_figure += "/ -  - \\";
		}
		else if(this.eyes === "wink"){
			stick_figure += "/ 0 - \\";
		}
		else if(this.eyes === "money"){
			stick_figure += "/ $ $ \\";
		}
		else {
			alert("Invalid eyes!");
		}
		stick_figure += "</br>"
		if(this.mouth === "happy"){
			stick_figure += "\\ _~' /";
		}
		else if(this.mouth === "talking"){
			stick_figure += "\\ _O /";
		}
		else if(this.mouth === "sad"){
			stick_figure += "\\ _^_ /";
		}
		else if(this.mouth === "vampire"){
			stick_figure += "\\ VV /";
		}
		else if(this.mouth === "sticking tongue"){
			stick_figure += "\\ _U_ /";
		}
		else{
			alert("Invalid mouth!");
		}
		if(this.arm === "waving"){
			stick_figure += "   ( )</br>    |     /</br>  / | /</br> |  |</br>( )/\\</br>  |   |</br>  |_  |_";
		}
		else if(this.arm === "not waving"){
			stick_figure += "</br>    |</br>  / | \\</br> |  |   |</br>( )/\\ ( )</br>  |   |</br>  |_  |_";
		}
		else {
			alert("Invalid arm!");
		}
		return ASCIItoHTML(stick_figure);

		//return "<div>&nbsp&nbsp___</div><div>/&nbsp0&nbsp0&nbsp\\</div><div>\\&nbsp_-_&nbsp/&nbsp&nbsp&nbsp(&nbsp)\</div><div>&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp/</div><div>&nbsp&nbsp/&nbsp|&nbsp/</div><div>&nbsp|&nbsp&nbsp|</div><div>(&nbsp)/\\</div><div>&nbsp&nbsp|&nbsp&nbsp&nbsp|</div><div>&nbsp&nbsp|_&nbsp&nbsp|_</div>";
	};
	drawFeatures() {
		let features = "<div>Name: " + this.name + "</div>";
		features += "<div>Age: " + this.age + "</div>";
		return features;
	};
	drawPerson(){
		return this.drawSpeach() + this.drawPersonFigure() + this.drawFeatures();
	}
};

let lonely_person = new Person('No Name',30,'Can you help me find me some friends?', "bald","money","talking","waving");
let friend = new Person('Is Friend',35,'I can be a friend!',"bunny","open","vampire","not waving");


 

