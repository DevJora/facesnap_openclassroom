import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs'
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent {
  snapform!: FormGroup;
  urlRegex!: RegExp;
  faceSnapPreview$!: Observable<FaceSnap>
  constructor(private formbuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.urlRegex = this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapform = this.formbuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern]],
      location: [null, Validators.required]
    }, {
      updateOn: 'blur'
    })
    this.faceSnapPreview$ = this.snapform.valueChanges.pipe(
      map(fromValue => ({
        ...fromValue,
        createdDate: new Date(),
        id: 0,
        snaps: 0
      }))
    );
  }

  onSubmitForm() {
    console.log(this.snapform.value);
  }


}
