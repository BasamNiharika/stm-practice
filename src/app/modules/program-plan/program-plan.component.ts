import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormArray,ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient,HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-program-plan',
  standalone:true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './program-plan.component.html',
  styleUrl: './program-plan.component.scss'
})
export class ProgramPlanComponent implements OnInit{

  ModuleForm: FormGroup=new FormGroup({});

  modulename:string=""
  topicname="";
  startdate:Date=new Date();
  enddate:Date=new Date();
  mode="";
  trainername="";
  status="";

  constructor(private formBuilder: FormBuilder,private http:HttpClient){};
  // constructor(private http:HttpClient){};

  ngOnInit(): void {
    this.ModuleForm=this.formBuilder.group({
      modulename:['',Validators.required],
      topicname:['',[Validators.required]],
      startdate:['',Validators.required],
      enddate:['',Validators.required],
      mode:['',Validators.required],
      trainername:['',Validators.required],
      status:['',Validators.required]
    });
  }

  onSubmit(){
    console.log(this.topicname);
    console.log(this.modulename);
    console.log(typeof(this.startdate));
    console.log(this.enddate);
    console.log(typeof(this.mode));
    console.log(this.trainername);
    console.log(this.status);
  }
  sendrequest(){
    const body={
      "ModuleName": this.modulename,
      "topicName": this.topicname,
      "startTime": this.startdate,
      "endTime": this.enddate,
      "trainingMode": this.mode,
      "trainer": this.trainername, // Example ObjectId
      "status": this.status
    };
    this.http.post("http://localhost:3000/api/program-plans",body)
    .subscribe((resultData:any)=>{
      console.log(resultData.data);
      console.log("post successfull");
    });
    // console.log(body);
  }
}
