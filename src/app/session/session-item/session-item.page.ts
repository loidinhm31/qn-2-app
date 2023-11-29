import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from "@angular/core";
import { YouTubePlayer } from "@angular/youtube-player";

@Component({
  selector: "app-session-item",
  templateUrl: "./session-item.page.html",
  styleUrls: ["./session-item.page.scss"],
})
export class SessionItemPage implements OnInit, AfterViewInit {
  public title!: string;

  @ViewChild("youtubePlayer") youtubePlayer?: YouTubePlayer;

  playerHeight = 0;
  playerWidth = 0;

  isPlaying = false;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.title = "Item";

    const tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  ngAfterViewInit() {
    // Set initial height after the view is initialized
    this.setPlayerHeight();
    this.setPlayerWidth();
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: Event) {
    this.setPlayerHeight();
    this.setPlayerWidth();
  }

  onStateChange(event: YT.OnStateChangeEvent) {
    // Check if the video is playing to update the timeline
    this.isPlaying = event.data === YT.PlayerState.PLAYING;
  }

  onReady(player: YT.PlayerEvent) {
    this.setPlayerHeight(); // Call it once on ready to adjust the player height initially
    this.setPlayerWidth();
    // Can control the player here if needed
  }

  setPlayerHeight() {
    // Adjust the player height based on the window height
    const windowHeight = window.innerHeight;
    const headerHeight = this.el.nativeElement.querySelector("ion-header").offsetHeight;
    const timelineHeight = this.el.nativeElement.getElementsByClassName("timeline")[0].offsetHeight;

    this.playerHeight = windowHeight - headerHeight - timelineHeight;
  }

  setPlayerWidth() {
    const windowWidth = window.innerWidth;
    const widthMenuBar = this.el.nativeElement.querySelector("ion-menu") ? this.el.nativeElement.querySelector("ion-menu").offsetWidth : 0;

    this.playerWidth = windowWidth - widthMenuBar;

    if (this.playerWidth < this.playerHeight) {
      this.playerHeight = this.playerHeight / 2;
    }
  }

  playVideo() {
    if (this.youtubePlayer) {
      this.isPlaying = !this.isPlaying;
      this.isPlaying ? this.youtubePlayer.playVideo() : this.youtubePlayer.pauseVideo();
    }
  }

  skipForward() {
    if (this.youtubePlayer) {
      const currentTime = this.youtubePlayer.getCurrentTime();
      this.youtubePlayer.seekTo(currentTime + 10, true); // Skip forward by 10 seconds
    }
  }

  skipBackward() {
    if (this.youtubePlayer) {
      const currentTime = this.youtubePlayer.getCurrentTime();
      const newTime = Math.max(0, currentTime - 10); // Skip backward by 10 seconds, but not before the start of the video
      this.youtubePlayer.seekTo(newTime, true);
    }
  }

  calculateProgress() {
    if (this.youtubePlayer) {
      const currentTime = this.youtubePlayer.getCurrentTime();
      const duration = this.youtubePlayer.getDuration();
      return (currentTime / duration) * 100 + "%";
    }
    return "0%";
  }

  seekTo(event: MouseEvent) {
    if (this.youtubePlayer) {
      const timeline = event.currentTarget as HTMLElement;
      const clickX = event.clientX - timeline.getBoundingClientRect().left;
      const timelineWidth = timeline.offsetWidth;
      const percentage = clickX / timelineWidth;
      const newTime = percentage * this.youtubePlayer.getDuration();
      this.youtubePlayer.seekTo(newTime, true);
    }
  }

}
