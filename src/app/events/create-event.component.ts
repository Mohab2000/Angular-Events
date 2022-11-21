import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  template: `
    <h1>new Event</h1>
    <hr />
    <div class="col-md-6">
      <h3>[Create Event Form will go here]</h3>
      <br />
      <br />
      <button type="submit" class="btun btn-primary">Save</button>
      <button type="button" class="btun btn-default" (click)="cancel()">
        Cancel
      </button>
    </div>
  `,
})
export class CreateEventComponent {
  isDirty: boolean = true;
  constructor(private router: Router) {}
  cancel() {
    this.router.navigate(["/events"]);
  }
}
