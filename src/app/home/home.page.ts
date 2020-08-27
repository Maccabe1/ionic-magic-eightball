import { Component } from "@angular/core";
import { MagicBallService } from "../services/magic-ball.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  public answer: string = "...";

  constructor(public magicBall: MagicBallService) {}

  showAnswer() {
    this.answer = this.magicBall.getRandomAnswer();
  }
}