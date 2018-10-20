<template>
  <div>
    <section id="intro">
      <img src="../assets/images/HO1B9018.jpg">
    </section>
    <section class="latest_event_sermons">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="box_wrap next_event">
                        <p class="subtitle">Next Event</p>
                        <h4><a href="#">Which is the same as saying</a></h4>
                        <div class="event_info">
                            <div class="event_date">
                                <span>20</span> Aug'18
                            </div>
                            <ul>
                                <li><i class="fa fa-clock-o"></i> Sunday  (8:00 am -9:00 am)</li>
                                <li><i class="fa fa-map-marker"></i> 56 Thatcher Avenue River Forest Chicago, IL United States</li>
                            </ul>
                        </div>
                        <a href="#" class="btn">Join Now <i class="fa fa-caret-right"></i> </a>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="box_wrap next_sermons">
                        <p class="subtitle">Latest Sermons</p>
                        <h4><a href="#">We denounce with righteous</a></h4>
                        <ul class="sermons_meta">
                            <li><i class="fa fa-user"></i> Message from <a href="#">Pastor Dates</a></li>
                            <li><i class="fa fa-calendar-check-o"></i> Aug 12, 2018</li>
                        </ul>
                        <div class="sermons_inside">
                            <ul>
                                <li><a href="#"><i class="fab fa-youtube" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="far fa-file-pdf"></i></a></li>
                                <li><a href="#"><i class="fa fa-share-alt"></i></a></li>
                            </ul>
                        </div>
                        <div class="audio-player">
                            <div id="play-btn">
                                <i class="fa fa-play"> </i>
                                <i class="fa fa-pause"></i>
                            </div>
                            <div class="audio-wrapper" id="player-container" href="javascript:;">
                            <audio id="player" ontimeupdate="initProgressBar()">
                                <source src="http://www.lukeduncan.me/oslo.mp3" type="audio/mp3">
                            </audio>
                            </div>
                            <div class="player-controls scrubber">
                            <small class="end-time">5:44</small>
                            <span id="seekObjContainer"> <progress id="seekObj" value="0" max="1"></progress>  </span>
                            <i class="fa fa-volume-up"></i>	                           
                            </div>
                            <div class="next_prev">
                                <i class="fa fa-angle-left"></i> 
                                <i class="fa fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section-padding">
        <div class="container">
            <div class="about_us">
                <div class="section-header text-center">
                    <h2>We are a Church That Believes in <u>Jesus</u></h2>
                </div>
                <p>Jesus is the most transformative figure to ever walk planet earth. He is the manifest expression of God's love for humanity. He is the answer to life's essential question. He was born like no one else. He lived like no one else. He died triumphant over death. He was raised gloriously from the grave on the third day according to the scriptures. There is no one like Him. His name is Jesus Christ.</p>
                <p>Every human being was created to be in relationship with God. The human soul is restless until it finds rest in God. To be in relationship with God, He demands that we be without sin. Being a 'good person' is not good enough. We have to be without flaw. God demands a perfection that is a basic impossibility for any person. So in Jesus Christ God became the supply of His own demand. Jesus gives us access to God. For the person who believes that Jesus Christ is God's son, that He died a substitutionary death for them on the cross, and that God raised Jesus from the dead receives the righteousness that Jesus provides.</p> 
                <p>This is what makes Jesus so unique. He gives us what we cannot earn. He makes us what we cannot become on our own. Through Him, the children of men become children of God.</p>
            </div>
            
            <!-- Features -->
            <div class="features">
                <div class="row">
                    <div class="col-md-3">
                        <div class="features_wrap">
                            <div class="f__icon"><i class="fa fa-flag"></i></div>
                            <h6>Worshop</h6>
                            <p>
                                Worshop with us Sundays at 8 and 11 AM.
                                Our weekly services are designed to help you experience God’s presence through dynamic, 
                                spirit-filled worship that will prepare your heart for the message you’ll receive. 
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="features_wrap">
                            <div class="f__icon"><i class="fa fa-flag"></i></div>
                            <h6>Connect</h6>
                            <p>Every Christian is given a spiritual gift, and we want to help you put yours to use. Connect with us and find a way to serve using your gift.</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="features_wrap">
                            <div class="f__icon"><i class="fa fa-users"></i></div>
                            <h6>Grow</h6>
                            <p>Check out the opportunities for connecting in groups and classes.</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="features_wrap">
                            <div class="f__icon"><i class="fa fa-book"></i></div>
                            <h6>Serve</h6>
                            <p>Get involved with volunteer opportunities in the church and community.</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Features --> 
        </div>
    </section>
    
  </div>
</template>

<script>
import carousel from 'v-owl-carousel'

export default {
  name: 'home',
  components: {
    carousel
  }
}
</script>
