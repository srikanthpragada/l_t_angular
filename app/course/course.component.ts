import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-course',
  templateUrl: './course.component.html'
})
export class CourseComponent   {

  title : string;
  trainer : string;
  topics : string [];

  constructor() { 
      this.title =  "Angular";
      this.trainer = "Sriknath";
      this.topics = ["Forms","Ajax","Routing"];
  }

  addTopic(topic : string) 
  {
     this.topics.push(topic)
  }

  clearTopics() 
  {
     this.topics = [];
  }

  removeTopic(topic : string) {
    console.log("Topics : " + topic);
  }
 
}
