/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		/*{
			module: "alert",
		},
		{
			module: 'MMM-SmartTouch', 
			position: 'bottom_center',    // This can be any of the regions.(bottom-center Recommended)
			config:{ 
			// None configuration options defined 
			}
			},
		
		{
			module: 'MMM-Motion-Detection',
			config: {
			// force the use of a usb webcam on raspberry pi
			useUSBCam: false,
			// recognition interval in seconds (smaller number = faster but more CPU intensive!)
			interval: 1,
			// Notificaiton Delay after movement stops being sensed (in seconds).
			motionStopDelay: 10,
			// Threshold for motion detection, smaller numbers means more sensitive
			detectionThreshold: 1000,
			// Turn off display when no motion is detected.
			turnOffDisplay: true
    }
},
		
		{
			module: "updatenotification",
			position: "top_bar"
		},
		*/
		{
			module: "MMM-Test",
			position: "top_right"
		},
		{
			module: "MMM-Test1",
			position: "top_right"
		},
		{
		module: 'MMM-ModuleToggle',
		config: {
			hide: ["MMM-iFrame1", "MMM-ImageSlideshow1","MMM-Test1","MMM-Test","MMM-iFrame"],
			notifications: [
				{
				notification: "MMM-Screencast:RUN-APPFACEDETECTED",
				hide: ["MMM-ImageSlideshow"],
				show: ["MMM-ImageSlideshow1","MMM-Test","MMM-Test1"]
                },
                	{
				notification: "MMM-Screencast:RUN-APPNOFACEDETECTED",
				hide: ["MMM-ImageSlideshow1","MMM-Test","MMM-Test1","MMM-iFrame","MMM-iFrame1"],
				show: ["MMM-ImageSlideshow"]
                },
                {
				notification: "DEUTSCH",
				hide: ["MMM-iFrame"],
				show: ["MMM-iFrame1"]
                },
                {
				notification: "ENGLISCH",
				hide: ["MMM-iFrame1"],
				show: ["MMM-iFrame"]
                }
                
                
          ]
    }
    },
		{
		module: 'MMM-ImageSlideshow',
		position: 'middle_center',
		config: {
			imagePaths: ['modules/MMM-ImageSlideshow/example1']
		}
		},
		
		{
		module: 'MMM-ImageSlideshow1',
		position: 'lower third',
		config: {
			imagePaths: ['modules/MMM-ImageSlideshow1/example1']
		}
		},
		

		{
		module: 'MMM-iFrame',
		position: 'upper third',	// This can be any of the regions.
		config: {
			// See 'Configuration options' for more information.
				url: ["https://www.google.sk/maps?f=q&amp;output=embed&amp;source=s_q&amp;hl=sk&amp;geocode=&amp;q=https:%2F%2Fwww.google.sk%2Fmaps%2Fms%3Fauthuser%3D0%26vps%3D5%26hl%3Dsk%26ie%3DUTF8%26oe%3DUTF8%26msa%3D0%26output%3Dkml%26msid%3D205427380680792264646.0004fe643d107ef29299a&amp;aq=&amp;sll=48.669026,19.699024&amp;sspn=4.418559,10.821533&amp;ie=UTF8&amp;ll="],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
				//https://video.nest.com/embedded/live/wSbs3mRsOF?autoplay=1
				//"https://www.google.sk/maps?f=q&amp;output=embed&amp;source=s_q&amp;hl=sk&amp;geocode=&amp;q=https:%2F%2Fwww.google.sk%2Fmaps%2Fms%3Fauthuser%3D0%26vps%3D5%26hl%3Dsk%26ie%3DUTF8%26oe%3DUTF8%26msa%3D0%26output%3Dkml%26msid%3D205427380680792264646.0004fe643d107ef29299a&amp;aq=&amp;sll=48.669026,19.699024&amp;sspn=4.418559,10.821533&amp;ie=UTF8&amp;ll="
				updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
				width: "1280", // width of iframe
				height: "720", // height of iframe
				frameWidth: "500" // width of embedded iframe, height is beeing calculated by aspect ratio of iframe
			}
		},
		{
			module: 'MMM-iFrame1',
		position: 'upper third',	// This can be any of the regions.
		config: {
			// See 'Configuration options' for more information.
				url: ["https://video.nest.com/embedded/live/wSbs3mRsOF?autoplay=1"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
				//https://video.nest.com/embedded/live/wSbs3mRsOF?autoplay=1
				//"https://www.google.sk/maps?f=q&amp;output=embed&amp;source=s_q&amp;hl=sk&amp;geocode=&amp;q=https:%2F%2Fwww.google.sk%2Fmaps%2Fms%3Fauthuser%3D0%26vps%3D5%26hl%3Dsk%26ie%3DUTF8%26oe%3DUTF8%26msa%3D0%26output%3Dkml%26msid%3D205427380680792264646.0004fe643d107ef29299a&amp;aq=&amp;sll=48.669026,19.699024&amp;sspn=4.418559,10.821533&amp;ie=UTF8&amp;ll="
				updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
				width: "1280", // width of iframe
				height: "720", // height of iframe
				frameWidth: "500" // width of embedded iframe, height is beeing calculated by aspect ratio of iframe
			}
		}
	
	
		
		/*,
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					}
				]
			}
		}/*	,
		{
			module: "MMM-Map",
			position: "lower_third"
		}/*,
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "New York",
				locationID: "2921355", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "f867ebcaa739ab2de78728ad8d5c89c4"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Gengenbach",
				locationID: "2921355", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "f867ebcaa739ab2de78728ad8d5c89c4"
			}
		},*/
		/*{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},*/
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
