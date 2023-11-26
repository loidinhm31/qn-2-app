import { Component, OnInit, ViewChild } from "@angular/core";
import { YouTubePlayer } from "@angular/youtube-player";

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.page.html',
  styleUrls: ['./session-item.page.scss'],
})
export class SessionItemPage implements OnInit {
  @ViewChild('youtubePlayer') youtubePlayer?: YouTubePlayer;

  isPlaying = false;

  ngOnInit() {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  onStateChange(event: YT.OnStateChangeEvent) {
    // Check if the video is playing to update the timeline
    this.isPlaying = event.data === YT.PlayerState.PLAYING;
  }

  onReady(player: YT.PlayerEvent) {
    // Can control the player here if needed
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
      return (currentTime / duration) * 100 + '%';
    }
    return '0%';
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
