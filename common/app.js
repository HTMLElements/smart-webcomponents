var key;
var isSubscribed = false;
var optinStatus = "disable";
var host='https://sdk.truepush.com/';
var cdnUrl = 'https://sdkimg.truepush.com/';
var browserData = {"ua":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36","browser":{"name":"Chrome","version":"78.0.3904.70","major":"78"},"engine":{"name":"Blink"},"os":{"name":"Windows","version":"10"},"device":{},"cpu":{"architecture":"amd64"}};
var subDomainsHost = 'tr1.us';
var fromSubDomain = false;
var subscription;
var EnableHTTPLocalTest = false;
var version = "v2";
var defaultKey="BKShchY7I9trZE-r3asUBs3uxgD-BxZGViDdHDsBBj1IOZN9So7Pu2pgEsveYOYlMeaUMYCKCCSnhy8Mo-C5WsU";
;
var permissionAllowed;
var iFrameReference;
var skipSubscriberReport;
var fromIframe = false ;
var fromWordpress = false;
var subscriberIdCallback;
(function (fileUseName, context, defination) {
    'use strict';
    context[fileUseName] = new defination();
})('HTTP', this, function () {
    'use strict';
    var getHttpObject = function () {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        } else {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    };

    var prepareHeaders = function (http_object, headers) {
        var headers_keys = Object.keys(headers);
        for (var index = 0; index < headers_keys.length; ++index) {
            var header_key = headers_keys[index];
            /*console.log(header_key, headers[header_key]); */
            http_object.setRequestHeader(header_key, headers[header_key]);
        };
        return http_object;
    };

    this.post = function (url, data, options, done) {
        var http = getHttpObject();

        http.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    try {

                        return done(null, JSON.parse(http.responseText));
                    } catch (error) {
                       return done(null, http.responseText);
                    }
                } else {
                    return done("error", null);
                }
            }
        };

        http.open("POST", url, true);

        if (options && options.headers) {
            http = prepareHeaders(http, options.headers);
        }

        if (options && options.credentials) {
            http.withCredentials = true;
        }
        http.send(JSON.stringify(data));
    };

});
function GetBrowserInfo() {

    var nVer=navigator.appVersion;
    var nAgt=navigator.userAgent;
    var browserName=navigator.appName;
    var fullVersion='' + parseFloat(navigator.appVersion);
    var majorVersion=parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;
    /* In Opera, the true version is after "Opera" or after "Version" */
    if(window.navigator.userAgent.indexOf("YaBrowser") > -1)
    {
        browserName="Yandex";
        var res=nAgt.match(/YaBrowser\/(\d.+)/);
        if(res[1])
        {
            fullVersion=res[1]; 
            majorVersion=res[1].split(".")[0];
        }
    }
    else if(window.navigator.userAgent.indexOf("Edge") > -1)
    {
        browserName="Edge";
        var res=nAgt.match(/Edge\/(\d.+)/);
        if(res[1])
        {
            fullVersion=res[1]; 
            majorVersion=res[1].split(".")[0];
        }
    }
    else if ( ((verOffset=nAgt.indexOf("Opera")) != -1) || ((verOffset=nAgt.indexOf("OPR")) != -1))  {
        browserName="Opera";
        var offLen;
        if(nAgt.indexOf("Opera")>=0)
            offLen = 6;
        else
        {
            offLen = 4;
        }            
        fullVersion=nAgt.substring(verOffset + offLen);
        if ((verOffset=nAgt.indexOf("Version")) != -1)
            fullVersion=nAgt.substring(verOffset + 8);
    }
    
    else if(nAgt.indexOf("UBrowser") > -1 || nAgt.indexOf("UCBrowser") > -1)
    {
        browserName="UCBrowser";
        var matcStr,regex;
        if(nAgt.indexOf("UBrowser")!=-1)
        {
            regex=/UBrowser\/(\d.+)/;
        }
        else
        {
            regex=/UCBrowser\/(\d.+)/;
        }
        var res=nAgt.match(regex);
        if(res[1])
        {
            fullVersion=res[1]; 
            var arr = res[1].split(".");
            majorVersion=parseFloat(arr[0]+"."+arr[1]);
        }   
    }
    /* In MSIE, the true version is after "MSIE" in userAgent */
    else if ((verOffset=nAgt.indexOf("MSIE")) != -1) {
        browserName="Microsoft Internet Explorer";
        fullVersion=nAgt.substring(verOffset + 5);
    }
  
    /* In Chrome, the true version is after "Chrome" */
    else if ((verOffset=nAgt.indexOf("Chrome")) != -1) {
        browserName="Chrome";
        fullVersion=nAgt.substring(verOffset + 7);
    }
    /* In Safari, the true version is after "Safari" or after "Version" */
    else if ((verOffset=nAgt.indexOf("Safari")) != -1) {
        browserName="Safari";
        fullVersion=nAgt.substring(verOffset + 7);
        if ((verOffset=nAgt.indexOf("Version")) != -1)
            fullVersion=nAgt.substring(verOffset + 8);
    }
    /* In Firefox, the true version is after "Firefox" */
    else if ((verOffset=nAgt.indexOf("Firefox")) != -1) {
        browserName="Firefox";
        fullVersion=nAgt.substring(verOffset + 8);
    }
    /* In most other browsers, "name/version" is at the end of userAgent */
    else if ((nameOffset=nAgt.lastIndexOf(' ') + 1) < (verOffset=nAgt.lastIndexOf('/'))) {
        browserName=nAgt.substring(nameOffset, verOffset);
        fullVersion=nAgt.substring(verOffset + 1);
        if (browserName.toLowerCase() == browserName.toUpperCase()) {
            browserName=navigator.appName;
        }
    }
    /* trim the fullVersion string at semicolon/space if present*/
    if ((ix=fullVersion.indexOf(";")) != -1)
        fullVersion=fullVersion.substring(0, ix);
    if ((ix=fullVersion.indexOf(" ")) != -1)
        fullVersion=fullVersion.substring(0, ix);
    if(browserName!="UCBrowser")
    {
        majorVersion=parseInt('' + fullVersion, 10);
        if (isNaN(majorVersion)) {
            fullVersion='' + parseFloat(navigator.appVersion);
            majorVersion=parseInt(navigator.appVersion, 10);
        }
    }
    var obj ={
        b: browserName,
        v: fullVersion,
        mv: majorVersion,
        an: navigator.appName,
        ua: navigator.userAgent
    };
    if(obj.b === 'Safari')
    {
        var ind=navigator.userAgent.indexOf("OS X ");
        if(ind >= 0)
        {
            var endInd=navigator.userAgent.indexOf(")",ind);
            if(endInd > ind)
               obj.os_x=navigator.userAgent.substring(ind+5,endInd).replace(/_/g,".");
        }
    }
    return  obj;
}
var desktopAllowedVersions={
    chrome: 40,
    chromium: 40,
    edge: 17,
    firefox: 55,
    safari: 11.1,
    os_x: 10.9,
    opera: 37,
    yandex: 19
};
var mobileAllowedVersions={
    chrome: 40,
    firefox: 44,
    opera: "all"
    /*edge: 17*/
    /*ucbrowser:11.8*/
};

function isNotifAllowed() {
    return promise=new Promise(function (resolve, reject) {

        if(browserData.ua.startsWith("WordPress"))
        {
            resolve();
        }

        /* console.log("browser info ", (bInfo)); */

        if (CheckBrowserCampatability()) {
            isPrivateMode(browserData.browser.name.toLowerCase()).then(function (a) {
                resolve();
            }).catch(function (err) {
                reject("not allowed");
            })
        } else
        {
            reject("not allowed");
        }
    })
}
function CheckBrowserCampatability() {
    var browser=browserData.browser.name.toLowerCase();
    var isMobile=browserData.ua.indexOf("Mobile") >= 0;
    var version=browserData.browser.major;
    if (!isMobile) /* desktop*/
    {
        if(browser === 'safari')
        {
             if ('safari' in window && 'pushNotification' in window.safari) {
                return true;
            }
            return false;
        }
        /*console.log("desktopAllowedVersions[browser]", desktopAllowedVersions[browser]);*/
        if (desktopAllowedVersions[browser]) {
            if (desktopAllowedVersions[browser] === 'all' || desktopAllowedVersions[browser] <= version)
                return true;
            return false;
        }
        return false;
    }
    if (mobileAllowedVersions[browser]) {
        if (mobileAllowedVersions[browser] === 'all' || mobileAllowedVersions[browser] <= version)
            return true;
        return false;
    }
    return false;
}
function isPrivateMode(browser) {
    return promise=new Promise(function (resolve, reject) {
        if (browser === 'firefox') {
            try {
                localStorage.test = 2;   
                resolve("done!")     
                } catch (e) {
                reject("private browser")
                }
        } else if (browser === 'safari') {
            var storage=window.sessionStorage;
            try {
                storage.setItem("someKeyHere", "test");
                storage.removeItem("someKeyHere");
                resolve("done!")
            } catch (e) {
                if (e.code === DOMException.QUOTA_EXCEEDED_ERR && storage.length === 0) {
                   // console.log(" private safari");
                    reject("private browser")
                }
            }
        } else if (browser === 'chrome' || browser === 'opera' || browser === 'chromium') {
            var fs= window.RequestFileSystem || window.webkitRequestFileSystem;
            if (!fs) {
               // console.log("FS check failed..");
                reject("private browser")
            }
            fs(window.TEMPORARY, 100, function (fs) {
                resolve("done!")
            }, function (err) {
              //  console.log(" private "+browser);
                reject("private browser")
            });
        }
        else if(browser === 'edge')
        {
            if(!window.indexedDB && (window.PointerEvent || window.MSPointerEvent)){
                reject("private browser")
            }
            else
            {
                resolve("done!")
            }
        }
        else if(browser === 'ucbrowser')
        {
            resolve("done!");
        }
        else if(browser === 'yandex')
        {
            var fs= window.RequestFileSystem || window.webkitRequestFileSystem;
            if (!fs) {
                console.log("FS check failed..");
                reject("private browser")
            }
            fs(window.TEMPORARY, 100, function (fs) {
                resolve("done!")
            }, function (err) {
                console.log(" private "+browser);
                reject("private browser")
            });
        }
    })
}
(function (fileUseName, context, defination) {
    'use strict';
    context[fileUseName] = defination;
})('truepushSDK', this, function (platformId) {
    function IsBrowserEnabled() {
    return "safari" === platformDetails.browserSupport ? "Safari" === browserData.browser.name : "except_safari" === platformDetails.browserSupport ? "Safari" != browserData.browser.name : "all" === platformDetails.browserSupport
}

function urlB64ToUint8Array(e) {
    for (var r = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), a = atob(r), o = new Uint8Array(a.length), t = 0; t < a.length; ++t) o[t] = a.charCodeAt(t);
    return o;
}
function B64toString(array) {
    var enc = new TextDecoder("utf-8");
    return enc.decode(array);
}
function ConvertToB64SafeUrl(s) {

    s = s.split('=')[0];
    s = s.replace(/\+/g, '-');
    s = s.replace(/\//g, '_');
    return s;
}

function CheckForKeys(sub) {
    var subscription = JSON.parse(JSON.stringify(sub));
    var Obj = {};
    if (!subscription.keys) {
        subscription.keys = {
            auth: ConvertToB64SafeUrl(btoa(String.fromCharCode.apply(null, new Uint8Array(sub.getKey('auth'))))),
            p256dh: ConvertToB64SafeUrl(btoa(String.fromCharCode.apply(null, new Uint8Array(sub.getKey('p256dh')))))
        }
    };
    if(subscription){
        Obj['endpoint'] = subscription['endpoint'];
        Obj['keys'] = {};
        Obj['keys']['p256dh'] = subscription['keys']['p256dh'];
        Obj['keys']['auth'] = subscription['keys']['auth']; 
    }
    return Obj;

}
function IsGcmSubscription(subscription) {
    if (!(subscription && subscription.endpoint && !subscription.endpoint.startsWith("android."))) {
        return true;
    }
    return false;
}

function SaveRequest(e,type) {
    var r = host + "api/v1/updateVisit";

    if (platformDetails.browserData && platformDetails.browserData.browser && platformDetails.browserData.browser.name === 'Safari') {
        var permissionData = window.safari.pushNotification.permission(platformDetails.safariDetails.webPushId);
        if (permissionData && permissionData.permission === 'granted' && permissionData.deviceToken) {
            e.deviceToken = permissionData.deviceToken;
        }
    }
    if (subscription) {
        e.subscription = subscription;
    }
    if(type== 'optin' || type == 'show'){
        var uniqueShow = localStorage.getItem("tp-uniqueShow");
        if(!uniqueShow) {
            localStorage.setItem("tp-uniqueShow",true);
            SaveRequest({
                uniqueShow : true
            }, "uniqueShow");
        }
    }
    if (navigator.language || navigator.userLanguage && window.truepushSDKInfo.userConsent === "allowed_cookies_personal_data") {
        e.language = navigator.language || navigator.userLanguage;
    }
    if(sdkInformation.userConsent === "allowed_cookies_only")
        e.deniedPersonalData = true;
/*    if(!e.subscribed)
    {
        e = SaveRequestsToLocalStorage(e, type);
    }*/
    SaveRequestsToLocalStorage(e,type,function(error, reqData){
        /*if(error)
            return error;
        
        data = e, HTTP.post(r, data, {
            credentials: !0,
            headers: {
                "Content-Type": "application/json"
            }
        }, function (err, r) {
            // if(r && r.data && e.visit){
            //     var head = document.head;
            //     var img = document.createElement("img");
            //     img.src = "https://sync.crwdcntrl.net/map/c=14043/tp=WAYO?http://www.kitespixel.com/getId?cid=5&pid=${profile_id}&plid="+r.data;
            //     img.width = "1";
            //     img.height = "1";
            //     head.appendChild(img);
            // }
            err ? console.log("error occured ", err) : r && "ERROR" == r.status && console.log("error occured ", r)
        }) */
    })

   
}

function SaveRequestsToLocalStorage(e, type) {
    var currentVisitData = e;
        var visitsData = localStorage.getItem("tp-visitsData");
        
        try 
        {
            if(visitsData)
            {
                visitsData = JSON.parse(visitsData);
            }
            else
            {
                visitsData = {};
            }
            if(visitsData[type] )
            {
                var count = visitsData[type].count?visitsData[type].count:0; 
                try{
                   /* var time = visitsData[type].time; 
                    console.log("found data in ls", count, time, visitsData);*/

                        visitsData[type] = e;

                        /*visitsData[type].time = time;
                        visitsData[type].time.push(Date.now()+timeDiff); */
                    visitsData[type].count = ++count;
                }
                catch(er)
                {
                    alert(er)
                }
            }
            else
            {
                visitsData[type] = e;
               /* visitsData[type].time = [Date.now()+timeDiff];*/
                visitsData[type].count = 1;
            }
            localStorage.setItem("tp-visitsData",JSON.stringify(visitsData));
        }
        catch(error)
        {

        }
}

function SendRequest(resendData, counter) {

    if(counter >= 2)
    {
        return;
    }

    var visitData = localStorage.getItem("tp-visitsData");
    if(!visitData && !resendData)
    {
        return;
    }

    try
    {
        var r = host + "api/v1/updateVisit";
        var dataToSend = [];
        if(!resendData)
        {
            visitData = JSON.parse(visitData);
            dataToSend = PrepareRequestData(visitData);
        }
        else
        {
            dataToSend = resendData;
        }
        
        var params = {
            visitsData: dataToSend,
            platformId: platformDetails._id
        };

        if(sdkInformation.userConsent === "allowed_cookies_only")
            params.deniedPersonalData = true;
        data = params, HTTP.post(r, data, {
            credentials: !0,
            headers: {
                "Content-Type": "application/json"
            }
        }, function (err, r) {
            /* if(r && r.data && e.visit){
                 var head = document.head;
                 var img = document.createElement("img");
                 img.src = "https://sync.crwdcntrl.net/map/c=14043/tp=WAYO?http://www.kitespixel.com/getId?cid=5&pid=${profile_id}&plid="+r.data;
                 img.width = "1";
                img.height = "1";
                head.appendChild(img);
             }*/
            if(err)
            {
                if(!counter)
                {
                    counter = 0;
                }
                return SendRequest(dataToSend,++counter);
            }
            localStorage.removeItem("tp-visitsData");
            err ? console.log("error occured ", err) : r && "ERROR" == r.status && console.log("error occured ", r)
        })
    }
    catch(e)
    {
            alert(e);
    }
}
function PrepareRequestData(visitData)
{
    var newArray = [];
    var keys = Object.keys(visitData);
    for(var i=0; i<keys.length; i++)
    {
        visitData[keys[i]].keyType = keys[i];
        newArray.push(visitData[keys[i]]);
    }
    return newArray;
}
function IsKeyExists(key, object) {
    try {
        if (object[key])
            return true;
        return false;
    }
    catch (e) {
        return false;
    }
}
function GenerateAltURl(platformDetails) {

    var regex;
    regex = /((https|http):\/\/)?(www\.)?([\w_\.-]+)(\/?)/;;
    var found = regex.exec(platformDetails.websiteURL), subDomainName;
    if (found) {
        found[4].replace(/\//g, "");
        subDomainName = found[4].replace(/\./g, "-");
    } else {
        subDomainName = null;
    }
    return "https://" + subDomainName + "." + subDomainsHost;
}
function CheckIfAllowedToAskSafari(platformDetails) {
    if (platformDetails.browserSupport === "all") {
        if (platformDetails.safariDetails && platformDetails.safariDetails.webPushId) {
            return true;
        }
        console.log("No safari certificate found", platformDetails);
    }
    else {
        console.log("not opted for safari");
    }
}
    
        
var optinHtmls;
function PrepareOptinHtmls()
{
  optinHtmls = {
    top_bar: `
    <div class="topbar" style="background-color:`+platformDetails.customStyles.barColor+`;color:`+platformDetails.customStyles.textColor+`;top:`+platformDetails.customStyles.top+`px;bottom:`+platformDetails.customStyles.bottom+`px" >
    <span>`+platformDetails.customStyles.barText+`</span> &nbsp;
    <button onclick="truepush.subscribeUserByTwoWayOptIn('hide')" class="btn-primary pointer" style="background-color:`+platformDetails.customStyles.buttonColor+`; color:`+platformDetails.customStyles.buttonTextColor+`" >`+platformDetails.customStyles.buttonText+`</button>
    &nbsp;
    <strong class="pointer" onclick="truepush.HideOptin('close')">&times;</strong>
  </div>
    `,
    default2: `
        <div class="overlay-tp"></div>
        <div class="optin-customization default-optin-tp">
            <div class="default-box">
                <a href="https://www.truepush.com?medium=tp&source=sfcgvd79i" target="_blank">
                    <span> Webpush by  
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 872.6 872.6" style="enable-background:new 0 0 872.6 872.6;width: 24px;height: 24px;vertical-align: middle;" xml:space="preserve">
                    <style type="text/css">
                        .st0{fill:#E54F50;}
                        .st1{fill:#FFFFFF;}
                    </style>
                    <g>
                        <path id="logo_truepush_1_" class="st0" d="M158.4,111.9h556.8c25.2,0,45.6,20.4,45.6,45.6v556.8c0,25.2-20.4,45.6-45.6,45.6H158.4   c-25.2,0-45.6-20.4-45.6-45.6V157.5C112.8,132.3,133.2,111.9,158.4,111.9z"/>
                        <g>
                            <g id="TruePushLogo_2_" transform="translate(120.000000, 187.000000)">
                                <g id="Shape_20_">
                                    <path class="st1" d="M159.6,105.7c-8.1,0-15.6,3.1-21.3,8.8c-1.9,1.9-3.4,3.9-4.7,6.2c1.3-2.2,2.9-4.2,4.7-6.1      C144,108.9,151.5,105.8,159.6,105.7l72.8,0.1c0,0,0-0.1,0-0.1H159.6z M251.7,100c0,0.1-0.1,0.2-0.1,0.2c-0.2,0.3-0.3,0.7-0.5,1      l0,0c-2.5,5.1-4,10.3-4.6,15.7c0.6-5.3,2.2-10.6,4.7-15.7L251.7,100C251.8,100,251.8,100,251.7,100      C251.8,100,251.8,100,251.7,100z"/>
                                </g>
                                <g id="Shape_9_">
                                    <path class="st1" d="M159.6,105.7c-8.1,0-15.6,3.1-21.3,8.8c-1.9,1.9-3.4,3.9-4.7,6.2c1.3-2.2,2.9-4.2,4.7-6.1      C144,108.9,151.5,105.8,159.6,105.7l72.8,0.1c0,0,0-0.1,0-0.1H159.6z M251.7,100c0,0.1-0.1,0.2-0.1,0.2c-0.2,0.3-0.3,0.7-0.5,1      l0,0c-2.5,5.1-4,10.3-4.6,15.7c0.6-5.3,2.2-10.6,4.7-15.7L251.7,100C251.8,100,251.8,100,251.7,100      C251.8,100,251.8,100,251.7,100z"/>
                                </g>
                                <g id="Shape_8_">
                                    <polygon class="st1" points="402,165.3 401.9,143.7 402,143.7     "/>
                                    <polygon class="st1" points="364,135.8 363,213.6 363.9,135.8     "/>
                                </g>
                                <g id="Shape_7_">
                                    <path class="st1" d="M280,73.9c1.1-0.5,2.2-1,3.3-1.5C282.2,72.8,281,73.3,280,73.9z M159.6,89.7c-12.3,0-23.9,4.8-32.6,13.5      c-2.7,2.7-5,5.7-6.9,9c1.9-3.2,4.3-6.2,7-8.9C135.7,94.5,147.2,89.8,159.6,89.7l79.6,0.1c0,0,0-0.1,0.1-0.1H159.6z"/>
                                </g>
                                <g id="Shape_5_">
                                    <path class="st1" d="M251.7,100c0,0.1-0.1,0.2-0.1,0.2C251.7,100.1,251.7,100.1,251.7,100C251.8,100,251.8,100,251.7,100      C251.8,100,251.8,100,251.7,100z M232.4,105.8c-0.7,2.7-1.3,5.4-1.7,8.1C231.1,111.1,231.7,108.4,232.4,105.8L232.4,105.8z       M251.7,100c0,0.1-0.1,0.2-0.1,0.2C251.7,100.1,251.7,100.1,251.7,100C251.8,100,251.8,100,251.7,100      C251.8,100,251.8,100,251.7,100z M232.4,105.8c-0.7,2.7-1.3,5.4-1.7,8.1C231.1,111.1,231.7,108.4,232.4,105.8L232.4,105.8z       M241.4,86.2c1.5-2.3,3.2-4.5,5-6.5C244.6,81.7,243,83.9,241.4,86.2z M246.5,79.6c1.1-1.3,2.3-2.6,3.5-3.8      C248.8,77.1,247.6,78.3,246.5,79.6z M250,75.8c1.2-1.2,2.5-2.4,3.8-3.6C252.5,73.4,251.2,74.6,250,75.8z M262.2,65.8      c-0.5,0.4-1.1,0.7-1.6,1.1C261.1,66.5,261.6,66.1,262.2,65.8L262.2,65.8z M251.7,100c0,0.1-0.1,0.2-0.1,0.2      C251.7,100.1,251.7,100.1,251.7,100C251.8,100,251.8,100,251.7,100C251.8,100,251.8,100,251.7,100z M232.4,105.8      c-0.7,2.7-1.3,5.4-1.7,8.1C231.1,111.1,231.7,108.4,232.4,105.8L232.4,105.8z M288.1,127.3L288.1,127.3l0-1.1L288.1,127.3z       M386,165.6L386,165.6l0,7.9L386,165.6z M232.4,105.8c-0.7,2.7-1.3,5.4-1.7,8.1C231.1,111.1,231.7,108.4,232.4,105.8      L232.4,105.8z M251.7,100c0,0.1-0.1,0.2-0.1,0.2C251.7,100.1,251.7,100.1,251.7,100C251.8,100,251.8,100,251.7,100      C251.8,100,251.8,100,251.7,100z"/>
                                </g>
                                <g id="Shape_4_">
                                    <polygon class="st1" points="272.2,126 272.2,135.6 272.1,135.6 272.1,127.3     "/>
                                    <polygon class="st1" points="386.1,173.5 386,165.6 386,165.6     "/>
                                </g>
                                <g id="Shape_1_">
                                    <rect x="159.9" y="127.3" class="st1" width="51.5" height="16.4"/>
                                </g>
                                <g id="Shape_2_">
                                    <path class="st1" d="M472.9,49.8H160.7c-23,0-44.8,9-61.1,25.2C83.1,91,74.1,112.6,74.1,135.7c0,47.3,38.8,85.8,86.6,85.8h69.9      l0.6,154.8c0.2,39.6,38.7,71.8,85.9,71.8h0.2c47.3-0.2,85.7-32.7,85.6-72.4l-0.6-154.1h70.6c47.8,0,86.6-38.5,86.6-85.8      C559.5,88.3,520.6,49.8,472.9,49.8z M160.7,205.5c-38.9,0-70.6-31.3-70.6-69.8c0-18.7,7.3-36.2,20.7-49.3      c13.4-13.3,31.1-20.6,49.9-20.6h101.5c-0.5,0.4-1.1,0.7-1.6,1.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0c-0.6,0.4-1.1,0.8-1.7,1.2      c-0.6,0.4-1.1,0.9-1.7,1.3c-0.5,0.4-1.1,0.8-1.6,1.3c-0.6,0.5-1.1,0.9-1.7,1.4c-1.3,1.2-2.6,2.4-3.8,3.6      c-1.2,1.2-2.4,2.5-3.5,3.8c-1.8,2.1-3.5,4.3-5,6.5c-0.4,0.6-0.8,1.1-1.1,1.7c0,0-0.1,0.1-0.1,0.2c-0.3,0.5-0.7,1.1-1,1.6      c0,0,0,0.1-0.1,0.1h-79.6c-12.3,0-23.9,4.8-32.6,13.4c-2.7,2.7-5,5.7-7,8.9c-0.2,0.3-0.4,0.6-0.6,1c-0.2,0.3-0.4,0.6-0.5,1      c0,0,0,0,0,0c-0.3,0.5-0.5,1-0.8,1.5c-0.1,0.2-0.2,0.3-0.2,0.5c-0.1,0.3-0.3,0.5-0.4,0.8c0,0.1-0.1,0.2-0.1,0.3      c-0.2,0.5-0.4,1-0.6,1.4c-0.2,0.5-0.4,1.1-0.6,1.7c0,0,0,0,0,0c-0.1,0.3-0.2,0.7-0.3,1c-0.1,0.3-0.2,0.7-0.3,1      c0,0.1,0,0.1-0.1,0.2c-0.2,0.7-0.4,1.3-0.6,2c-0.1,0.4-0.2,0.8-0.3,1.1c-0.1,0.4-0.2,0.7-0.2,1.1c-0.1,0.7-0.3,1.5-0.4,2.2      c-0.1,0.8-0.2,1.5-0.3,2.3c-0.1,0.8-0.1,1.5-0.2,2.3c0,0.8-0.1,1.5-0.1,2.3c0,25.3,20.6,45.9,46,45.9h149.2v23.9H160.7z       M232.4,105.8c-0.7,2.7-1.3,5.4-1.7,8.1c-0.1,0.9-0.2,1.8-0.3,2.7c0,0.5-0.1,1-0.1,1.6c0,0.7-0.1,1.4-0.1,2.1c0,0.7,0,1.3,0,2      l0,5.1l0.1,8.4l0.1,29.9h-70.8c-16.5,0-30-13.4-30-29.9c0-0.2,0-0.5,0-0.7c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3      c0-0.4,0-0.9,0.1-1.3c0-0.4,0.1-0.7,0.1-1.1c0,0,0,0,0-0.1c0-0.3,0.1-0.6,0.1-0.9c0-0.1,0-0.2,0-0.3c0-0.3,0.1-0.6,0.2-0.9      c0-0.2,0.1-0.4,0.1-0.6c0.1-0.3,0.1-0.5,0.2-0.7c0-0.1,0.1-0.3,0.1-0.4c0.1-0.3,0.2-0.6,0.3-0.9c0.1-0.2,0.1-0.4,0.2-0.6      c0.1-0.2,0.1-0.4,0.2-0.6c0.2-0.4,0.3-0.9,0.5-1.3c0,0,0-0.1,0-0.1c0.2-0.4,0.4-0.9,0.6-1.3c0.2-0.4,0.4-0.9,0.7-1.3      c0,0,0,0,0,0c0.2-0.3,0.3-0.6,0.5-1c1.3-2.2,2.8-4.3,4.7-6.2c5.6-5.7,13.2-8.8,21.3-8.8L232.4,105.8      C232.4,105.7,232.4,105.7,232.4,105.8L232.4,105.8z M401.9,143.7h68.9v-16.4h-85l0.3,54.3h0l0.2,31.9l0.6,162.1      c0.1,30.9-31.2,56.2-69.6,56.4H317c-38.4,0-69.7-25-69.9-55.8l-0.6-154.7h24.3l-2,144.1c-0.1,8.4,3.4,16.7,9.8,23.3      c8.7,8.9,21.7,14,35.7,14.1c0.3,0,0.6,0,0.9,0c0.6,0,1.2,0,1.8,0h0.1c0.4,0,0.9,0,1.3-0.1c0.5,0,0.9,0,1.4-0.1      c0.2,0,0.5,0,0.7-0.1c0.6,0,1.2-0.1,1.8-0.2c0.1,0,0.2,0,0.3,0c0.5-0.1,0.9-0.1,1.4-0.2c1.4-0.2,2.9-0.5,4.3-0.8      c0.3,0,0.5-0.1,0.7-0.2c0,0,0,0,0.1,0c0.4-0.1,0.9-0.2,1.3-0.4c0.7-0.2,1.5-0.4,2.2-0.6c0.4-0.1,0.8-0.3,1.1-0.4      s0.7-0.3,1.1-0.4c0.8-0.3,1.5-0.6,2.3-0.9c0.5-0.2,0.9-0.4,1.4-0.6c0.2-0.1,0.4-0.2,0.6-0.3s0.4-0.2,0.6-0.3      c0.3-0.1,0.5-0.2,0.7-0.4c0.5-0.3,1-0.5,1.6-0.8c0.5-0.3,1-0.6,1.5-0.9c1.2-0.8,2.4-1.6,3.6-2.5c0.2-0.2,0.5-0.4,0.7-0.5      c0.5-0.4,0.9-0.7,1.3-1.1c0.6-0.5,1.1-1,1.7-1.5c6.6-6.4,10.2-14.5,10.4-22.9l2.1-153.2l0.9-77.8l0.1-8.5h-16l-1,86l-2.1,153.2      c-0.1,5.3-3,9.2-5.5,11.7c-5.8,5.6-15,8.9-24.8,8.7c-9.7-0.1-18.8-3.6-24.4-9.3c-2.4-2.5-5.3-6.6-5.3-11.9l2-144.3h21.9v135.8      h16V213.5l0-86.2h-16l0,38.3h-21l0.4-29.8v-8.5h0l0-1.1c0-0.7,0.1-1.4,0.2-2.1c0-0.2,0.1-0.5,0.1-0.7      c1.5-7.4,8.8-13.6,18.4-16.3c0.6-0.2,1.2-0.3,1.8-0.5c0.2,0,0.4-0.1,0.6-0.1c0.8-0.2,1.5-0.3,2.3-0.4c2-0.3,4-0.5,6.1-0.5h156.3      c16.5,0,30,13.5,30,30c0,16.5-13.5,29.9-30,29.9h-72v-0.3L401.9,143.7z M386.1,173.5l0-7.9h0L386.1,173.5z M472.9,205.5h-70.6      l-0.1-23.9h72c25.4,0,46-20.6,46-45.9c0-25.4-20.6-46-46-46H317.8c-13.8,0-26.1,4.8-34.4,12.4c-0.2,0.2-0.5,0.4-0.7,0.7      c-3.9,3.8-6.9,8.3-8.7,13.2c-0.1,0.3-0.2,0.6-0.3,0.9c-1,2.9-1.5,6-1.5,9.2v9.6l-0.4,30h-25.4l-0.1-30l-0.1-8.3l0-5.1      c0-0.9,0-1.7,0.1-2.6c0-0.4,0-0.9,0.1-1.3c0-0.4,0.1-0.9,0.1-1.3c0.6-5.3,2.2-10.6,4.6-15.7l0,0c0.2-0.3,0.3-0.7,0.5-1      c0-0.1,0.1-0.2,0.1-0.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l0,0c0,0,0,0,0,0v0c0,0,0,0,0,0s0,0,0,0      c0,0,0,0,0-0.1c0.3-0.5,0.5-0.9,0.8-1.4c0-0.1,0.1-0.1,0.1-0.2c0.3-0.4,0.5-0.8,0.8-1.3c0.7-1.1,1.4-2.2,2.2-3.2      c0.2-0.3,0.4-0.6,0.7-0.9c0.2-0.3,0.5-0.6,0.7-0.9c0.2-0.3,0.5-0.6,0.7-0.9c0.2-0.3,0.5-0.6,0.7-0.9v0c0.2-0.3,0.5-0.6,0.8-0.8      c0.3-0.3,0.5-0.6,0.8-0.8c0.5-0.6,1-1.1,1.6-1.6c0.3-0.3,0.5-0.5,0.8-0.8c0.6-0.5,1.1-1.1,1.7-1.6h0c0.6-0.5,1.2-1,1.8-1.5      c0.3-0.3,0.6-0.5,0.9-0.7c0.3-0.3,0.6-0.5,0.9-0.7c0.3-0.3,0.6-0.5,0.9-0.7c0.3-0.2,0.6-0.5,1-0.7c0.6-0.5,1.3-0.9,2-1.3      c0.7-0.4,1.3-0.9,2-1.3c0.4-0.2,0.8-0.5,1.2-0.7c0.3-0.2,0.6-0.4,0.9-0.5c0.3-0.2,0.7-0.4,1-0.5c0.7-0.4,1.4-0.8,2.1-1.1      c0.4-0.2,0.7-0.4,1.1-0.5c1.1-0.5,2.2-1,3.3-1.5c0.8-0.3,1.5-0.6,2.3-0.9c0.4-0.2,0.8-0.3,1.2-0.4c0,0,0.1,0,0.1,0      c0.3-0.1,0.6-0.2,0.9-0.3c0.1,0,0.1,0,0.2-0.1c0.4-0.1,0.8-0.3,1.2-0.4c0.4-0.1,0.8-0.3,1.2-0.4c0.8-0.3,1.6-0.5,2.4-0.7      c0.4-0.1,0.8-0.2,1.2-0.3c0.8-0.2,1.6-0.4,2.5-0.6c0.4-0.1,0.8-0.2,1.2-0.3c0.4-0.1,0.8-0.2,1.3-0.3c0.3-0.1,0.6-0.1,0.9-0.2      c0.5-0.1,1.1-0.2,1.6-0.3c0.4-0.1,0.9-0.2,1.3-0.2c0.6-0.1,1.1-0.2,1.7-0.3c0.3,0,0.5-0.1,0.8-0.1c0.5-0.1,0.9-0.1,1.4-0.2      c0.9-0.1,1.7-0.2,2.6-0.3c0.5,0,1.1-0.1,1.7-0.1c0.3,0,0.7,0,1-0.1c0.8,0,1.7-0.1,2.5-0.1c0.5,0,0.9,0,1.3,0h157.2      c38.9,0,70.6,31.4,70.6,69.9C543.5,174.1,511.8,205.5,472.9,205.5z"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    </svg>
                    <span style="text-decoration: underline"> Truepush </span> </span>
                </a>
            </div>
        </div>
    `,
    bell: `
    <div class="row mb30">
    <div class="bell-circle mb20" onclick="truepush.subscribeUserByTwoWayOptIn()" style="background-color:`+platformDetails.customStyles.circleColor+`">
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="32px"
        heigth="32px">
        <g>
          <g>
            <path d="M405.353,377.987C389.421,354.09,381,326.277,381,297.555V216c0-33.47-13.057-64.915-36.766-88.542
      c-20.117-20.048-45.839-32.399-73.623-35.612V61h-30v30.96C178.951,99.654,131,152.956,131,217.194v80.362
      c0,28.722-8.421,56.535-24.353,80.432L77.973,421H213.58c6.192,17.458,22.865,30,42.42,30s36.228-12.542,42.42-30h135.607
      L405.353,377.987z M133.964,391C151.665,362.989,161,330.775,161,297.555v-80.362c0-52.861,42.466-96.013,94.663-96.193
      c0.113,0,0.225,0,0.338,0c25.315,0,49.12,9.833,67.058,27.708C341.077,166.664,351,190.562,351,216v81.556
      c0,33.221,9.333,65.433,27.036,93.444H133.964z"
              class="bell-color" style="fill:`+platformDetails.customStyles.bellColor+`"/>
          </g>
        </g>
        <g>
          <g>
            <path d="M469.53,153.469l-21.213,21.213C470.038,196.403,482,225.282,482,256c0,30.044-11.514,58.467-32.419,80.034l21.541,20.881
      C497.482,329.72,512,293.881,512,256C512,217.269,496.917,180.856,469.53,153.469z"
              class="bell-color" style="fill:`+platformDetails.customStyles.bellColor+`" />
          </g>
        </g>
        <g>
          <g>
            <path d="M427.104,195.896l-21.213,21.214C416.279,227.497,422,241.308,422,256c0,14.463-5.568,28.12-15.68,38.456l21.445,20.979
      C443.394,299.459,452,278.351,452,256C452,233.295,443.158,211.95,427.104,195.896z"
              class="bell-color" style="fill:`+platformDetails.customStyles.bellColor+`" />
          </g>
        </g>
        <g>
          <g>
            <path d="M63.683,174.682L42.47,153.469C15.083,180.856,0,217.269,0,256c0,37.881,14.518,73.72,40.878,100.915l21.541-20.881
      C41.514,314.467,30,286.044,30,256C30,225.282,41.962,196.403,63.683,174.682z"
              class="bell-color" style="fill:`+platformDetails.customStyles.bellColor+`" />
          </g>
        </g>
        <g>
          <g>
            <path d="M106.109,217.109l-21.213-21.214C68.842,211.949,60,233.295,60,256c0,22.351,8.606,43.459,24.234,59.435l21.445-20.979
      C95.568,284.12,90,270.463,90,256C90,241.309,95.721,227.497,106.109,217.109z"
              class="bell-color" style="fill:`+platformDetails.customStyles.bellColor+`" />
          </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
      </svg>
    </div>
  </div>
    `,
    box: `

 <div class="tpush-box">
 <p class="main-text" style="display:`+(platformDetails.customStyles.visibleStatus?"none":"block")+` !important">`+platformDetails.customStyles.mainText+`</p>

   <p class="main-text" style="display:`+(platformDetails.customStyles.visibleStatus?"block":"none")+` !important">Allow updates from `+platformDetails.websiteURL+`</p>
   <p class="sub-text">`+platformDetails.customStyles.subText+`</p>
   <div>
     <button class="not-now" onclick="truepush.HideOptin('close')">`+platformDetails.customStyles.firstBtnText+`</button>
     <button class="allow" onclick="truepush.subscribeUserByTwoWayOptIn('hide')">`+platformDetails.customStyles.secondBtnText+`</button>
   </div>
   <p class="poweredby"><a href="https://www.truepush.com?medium=box&source=af1uqm8di" target="_blank" style="text-decoration: none; color: inherit">Powered by Truepush</a></p>
 </div>
    `,
    box2: `
<div class="header_truepush">
<div class="image">
  <img src="`+cdnUrl+`website_icons/`+platformDetails.websiteIcon+`">
</div>
<p style="display:`+(platformDetails.customStyles.visibleStatus?"none":"block")+` !important">`+platformDetails.customStyles.mainText+` </p>
<p style="display:`+(platformDetails.customStyles.visibleStatus?"block":"none")+` !important">Allow updates from `+platformDetails.websiteURL+` </p>

</div>
<div class="buttons">
<button type="button" class="not-now" onclick="truepush.HideOptin('close')">`+platformDetails.customStyles.firstBtnText+`</button>
<button type="button" class="allow" onclick="truepush.subscribeUserByTwoWayOptIn('hide')">`+platformDetails.customStyles.secondBtnText+`</button>
</div>

<p class="poweredby"><a href="https://www.truepush.com?medium=box&source=af1uqm8di" target="_blank" style="text-decoration: none; color: inherit">Powered by Truepush</a></p>
    `,
    default: `
    <button onclick="truepush.HideOptin()">×</button>
    <p>Notifications by</p>
    <a href="https://www.truepush.com?medium=default&source=rh5bpz549" target="_blank">TruePush</a>
    `
  }
}
function InsertOptinHtmls(optintype)
{
  optintype = (optintype === 'box+')?'box2':optintype;
  optintype = (optintype === 'default+')?'default2':optintype;
  document.getElementById("jklm-" + optintype).innerHTML = optinHtmls[optintype];    
}

function InsertToDOM()
{
  try{
  PrepareOptinHtmls();
}
catch(E){
  alert(E)
}
var div = document.createElement('div');

// let optinClasses = {
//   "box" : {
//     "iframe" : "optin-box-iframe"
//   },
//   "box2" : {
//     "iframe" : "optin-box-iframe"
//   },
//   "bell" : {
//     "iframe" : "optin-box-iframe"
//   },
//   "optinbar" : {
//     "iframe" : "optin-box-iframe"
//   }
// }
/* preparering optin class for iframe */
var optinSuffix = "";
if(!platformDetails.websiteSSL){
  // if(optinClasses[platformDetails.optInType] && optinClasses[platformDetails.optInType]['iframe']){
  //   var optinTypeClass =  optinClasses[platformDetails.optInType]["iframe"];
    optinSuffix = " optin-iframe"; 
  // }
}

try{
div.innerHTML = `
<div class="optin-types optin-customization">

<!-- Top bar optin -->

<div class="optin-topbar`+optinSuffix+`" id="jklm-top_bar" style='display:none'>

</div>

<!-- Bell optin -->

<div class="optin-bell`+optinSuffix+`" id="jklm-bell" style='display:none' >
     
    </div>



<!-- Simple optin box -->
 <div class="optin-box`+optinSuffix+`" id="jklm-box" style='display:none'>
 
</div>
<!-- End simple optinbox -->



<!-- Optinbox2 -->
<div class="optin-box2`+optinSuffix+`" id="jklm-box2" style='display:none'>

</div>
<!-- End optinbox2 -->

<div class="default-browser-optin`+optinSuffix+`" id="jklm-default2" style='display:none'>
 
</div>

<div class="default-promo`+optinSuffix+`" id="jklm-default" style='display:none'>
 
</div>

</div>
`;
}catch(e)
{
  console.log("error is ", e);
}

return document.body.appendChild(div);
};
this.subscribeUserByTwoWayOptIn = function(status) {

  SaveRequest({
    optinClick: !0
  }, "optinClick");
  if (status) {
    truepush.HideOptin();
  }
  SubscribeUser()
};

function ShowOptin(platformDetails) {
  /*if (platformDetails.optInType === 'top_bar'  && platformDetails.customStyles.top === 0) {
    document.body.className += ' ' + 'top-class';
  }*/
  localStorage.removeItem('optinShow');
  sessionStorage.removeItem('new_session');

    if(( !platformDetails.Strip ||  platformDetails.Strip !=='No') && platformDetails.optInType === 'default')
    {
      document.getElementById("jklm-" + platformDetails.optInType).style.display = "block";
    }
    else if(platformDetails.optInType != 'default'){
      InsertOptinHtmls(platformDetails.optInType);
      var optinType = (platformDetails.optInType === 'box+')?'box2':platformDetails.optInType;
      optinType = (optinType === "default+") ? "default2" : optinType;
      if(!platformDetails.websiteSSL) iFrameParentReference.postMessage({type: "iframeShow"}, "*");
      document.getElementById("jklm-" + optinType).style.display = "block";
      setTimeout(function(){
        if(!platformDetails.websiteSSL){
          var showOptinHeight =  {type: "optinHeight"};
          showOptinHeight.height = document.getElementById("jklm-" + optinType).clientHeight + 5;
          iFrameParentReference.postMessage(showOptinHeight, "*");    
        }
        if(optinType == "default2") {
          if((navigator.userAgent.indexOf("Opera") != -1) || (navigator.userAgent.indexOf("OPR") != -1)){
            document.getElementById("jklm-" + optinType).className = "default-browser-optin opera-default-optin";
          } else if (navigator.userAgent.indexOf("Firefox") != -1){
            document.getElementById("jklm-" + optinType).className = "default-browser-optin moz-default-optin";
          } else if (navigator.userAgent.indexOf("Edge") != -1){
            document.getElementById("jklm-" + optinType).className = "default-browser-optin ie_edge_optin";
          }
        }
        if(optinType === "top_bar"){
          if(platformDetails.customStyles.top !== ""){
            document.body.style.cssText = 'margin-top:' + document.getElementsByClassName("topbar")[0].clientHeight + "px !important";
          } else {
            document.getElementsByTagName("html")[0].style.cssText = 'margin-bottom:' + document.getElementsByClassName("topbar")[0].clientHeight + "px !important";
          }
          
        }
      },500);
    }


    if(platformDetails.optInType !== 'custom' && platformDetails.optInType !== 'bell' && platformDetails.optInFrequencyType ==='spec_time'){
      localStorage.setItem('optinShow',Date.now()+(platformDetails.optInFrequency*60000));
    }
    else if(platformDetails.optInFrequencyType ==='new_session'){
        sessionStorage.setItem('new_session', 'true');
    }

 
};
function ShowDefaultOptin() {
  document.getElementById("jklm-default").style.display = "block";

}
this.HideOptin = function(type) {
  if (type == "close") {
    SaveRequest({
      optinIgnore: !0
    }, "optinIgnore");

    SendRequest();
    if(!localStorage.getItem("optinShow") && platformDetails.optInType !== 'custom' && platformDetails.optInType !== 'bell' && platformDetails.optInFrequencyType ==='spec_time'){
      localStorage.setItem('optinShow',Date.now()+(platformDetails.optInFrequency*60000));
    }
    if(platformDetails.optInFrequencyType ==='new_session'){
      sessionStorage.setItem('new_session', 'true');
  } 

  }
  if (platformDetails.optInType === 'top_bar' && platformDetails.customStyles.top === 0) {
    document.body.className = document.body.className.replace("top-class", "");
  }
  var optinType = (platformDetails.optInType === 'box+')?'box2':platformDetails.optInType;
  optinType = (optinType === 'default+')?'default2':optinType;
  document.getElementById("jklm-" + optinType).style.display = "none";
  if(!platformDetails.websiteSSL) iFrameParentReference.postMessage({type: "hideOptin"}, "*");
};
    
    var requestTimeGap = 15*60;
    var serverTime = 1572356259161;
    var timeDiff = 1572356259161 - Date.now();
    var loadingObject = {
        platformDetails : true,
        jsFiles: true
    };
    var defaultPermission = Notification.permission;
    var testStr="Testing string";
    var webpushId;
    var processStarted;
    var initialized = false;
    var sdkInformation;
    var platformDetails;
    var tagsToAdd;
    var tagsToRemove;
    var tagsToGet;
    var dataFromParentNotAvailable;
    var allowedInBrowser = true;
    window.addEventListener("message", receiveMessage, false);
    var iFrameParentReference; /* to reference parent element. Used to send subscriberId back to parent in http websites.*/
    CheckScriptLocation();
    function receiveMessage(event) {
        var eventData = event.data;    
        if(eventData && eventData.optInType)
        {
            platformDetails = eventData;
            if(platformDetails.userConsent) {
                if(!sdkInformation) sdkInformation={};
                sdkInformation.userConsent = platformDetails.userConsent;
            }
            if(!processStarted)
            {
                StartProcess();
            }
            if(fromSubDomain){
                document.getElementById("subDomainTP").innerHTML = " Subscribe to "+platformDetails.websiteURL;
                document.getElementById("requestDiv").style.display = "block";
            }
            processStarted = true;
        }
        else if(eventData && eventData.type === 'getSubscriberId')
        {
            GetSubscriberIdHttp(function(response){
                response.type = "subscriberId";
                iFrameParentReference.postMessage(response, "*");
            });
        }
        else if(eventData && eventData.type === "subscriberId")
        {
            if(subscriberIdCallback)
            {
                subscriberIdCallback(eventData.error, eventData.result);
                subscriberIdCallback = null;
            }
        }
        else if(eventData && eventData.type === "hideOptin")
        {
            document.getElementById("tp-iframe").style.display = "none";
        }
        else if(eventData && eventData.type === "optinHeight")
        {
            document.getElementById("tp-iframe").style.minHeight = eventData.height +"px";
        }
        else if(eventData && eventData.type === "iframeShow")
        {
            document.getElementById("tp-iframe").style.display = "block";
        }
    }

    setTimeout(function(){
        if(!processStarted && sdkInformation && (fromSubDomain))
        {
            dataFromParentNotAvailable = true;
            truepush.Init(sdkInformation);
        }
    },5000);

    if(typeof Promise!== 'undefined')
    {
        if(!fromSubDomain)
        {
            loadStyle(
            'https://sdk.truepush.com/optins/optins.css'
            );
        }
        else
        {
            LinkLoadedProceed();
        }
    }
    else
    {
        console.log("browser is not supported");
    }
    function loadStyle(url)
    {

        var head = document.head;
        var link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        link.onload = LinkLoadedProceed();
        head.appendChild(link);
    }
    function LinkLoadedProceed()
    {
        isNotifAllowed().then(function(bdata){
            loadingObject.jsFiles = false;
                setTimeout(function(){
                    if(!loadingObject.platformDetails)
                    {
                        if(!processStarted && !(fromSubDomain || fromIframe))
                        {
                            StartProcess();
                            processStarted = true;
                        }
                    }
                },100);           
            
        }).catch(function(e){
            console.log("not allowed in browser");
            allowedInBrowser = false;
            try{
                document.getElementById('jklm-custom').style.display = "none"; 
            }
            catch(e){
            }
        })
    }
    var options = {
        credentials: true,
        headers: {
            "Content-Type": "application/json"
        }
    };

    function  BeginHTTPSVapid() {
        key = urlB64ToUint8Array(platformDetails.vapidDetails.publicKey);
        var url = "/sw.js?";
        var hash = "/sw.js?"+Math.floor(Date.now()/(10*1000));
        var testingUrl = "/sw.js?"+Math.floor(Date.now()/(10*1000));
        var scope ={scope: '/'};
        if(!navigator || !navigator.serviceWorker) {
            return console.log("Push notifications are not working in this browser..because serviceWorker not supported.");
        }
        var domainUrl = window.location.protocol+"//"+window.location.hostname;
        if(window.location.port){
            domainUrl = domainUrl + ":" + window.location.port;
        }
        if(fromSubDomain)
        {
            hash = "/sw.js?key="+platformDetails._id+"&isAltUrl=true";
            testingUrl = "/sub-domain/sw.js?key="+platformDetails._id+"&isAltUrl=true";
        }
        else if(fromWordpress)
        {
            hash = "/wp-content/plugins/truepush/sw.php";
            testingUrl = hash;
        }
        else
        {
            hash = "/"+sdkInformation.serviceWorkerFileName+"?truepush"+Math.floor(Date.now()/(10*1000));
            if(sdkInformation.absoluteSWPath){   
                hash = domainUrl + hash;
                scope.scope = domainUrl + '/';
            }
            testingUrl = hash
        }
        if(EnableHTTPLocalTest)
        {
            hash = testingUrl;
            scope= null;
        }
        if(!sdkInformation.scriptRegisterEveryTime && sdkInformation.scriptRegisterEveryTime === false){
            console.log("scriptRegisterEveryTime false");
            navigator.serviceWorker.getRegistration(domainUrl+'/').then(function (reg) {
                if(reg && reg.active && reg.active.scriptURL && reg.active.scriptURL.indexOf("sw.js") > -1){
                    gettingSubscription(reg);
                }
                else{
                    navigator.serviceWorker.register(hash, scope).then(function(reg) {
                        gettingSubscription(reg);
                    }).catch(function(error){
                        console.log("service worker not ready", error);
                    })
                }
            });
        } else {
          //  console.log("scriptRegisterEveryTime true");
            navigator.serviceWorker.register(hash, scope).then(function(reg) {
                gettingSubscription(reg);
            }).catch(function(error){
                console.log("service worker not ready", error);
            })
        }
        function gettingSubscription(reg) {
            if(!fromSubDomain)
            {
                if(Notification.permission != "granted")
                {
                    RegisterWorkerAndOptin();
                }
                else{
                    reg.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: key
                    }).then(function(sub) {
                        subscription = CheckForKeys(sub);
                        skipSubscriberReport = true;
                        SaveSubscription(subscription, 'update');
                    }).catch(function(err){
                        RegisterWorkerAndOptin();
                    })  
                }
            }
            else
            {
                RegisterWorkerAndOptin();
            }
        }
    }

    function RegisterServiceWorker()
    {
        var hash = "/sw.js?"+Math.floor(Date.now()/(10*1000));
        var testingUrl = "/sw.js?"+Math.floor(Date.now()/(10*1000));
        navigator.serviceWorker.register(hash).then(function(reg1) {
        }).catch(function(err){

        })
    }
    function RegisterWorkerAndOptin()
    {
        if(Notification.permission === 'granted')
        {
            permissionAllowed = true;
            skipSubscriberReport = true;
            if(subscription)
            {
                SaveSubscription(subscription);
                return;
            }
            return truepush.subscribeUserVapid(true);
        }
        if(!fromSubDomain)
        {
            if(Notification.permission==='default' )
            {
                if(platformDetails.optInType != 'custom')
                {
                    setTimeout(function(){
                        if(CanShowOptin()){
                            if(platformDetails.optInType != 'default' )
                            {
                                if(platformDetails.optInType === 'default+' && ((platformDetails.optInFrequencyType ==='spec_time' && localStorage.getItem('optinShow') <= Date.now()) || (!sessionStorage.getItem('new_session') && platformDetails.optInFrequencyType ==='new_session') || (platformDetails.optInFrequencyType ==='page_refresh'))){
                                    SaveRequest({
                                        optin : true,
                                        optinType: platformDetails.optInType
                                    }, "optin");
                                        ShowOptin(platformDetails); 
                                    truepush.subscribeUserVapid();
                                    optinStatus = "enable";
                                }
                                else if((platformDetails.optInType === 'bell') ||  (platformDetails.optInFrequencyType ==='spec_time' && localStorage.getItem('optinShow') <= Date.now()) || (!sessionStorage.getItem('new_session') && platformDetails.optInFrequencyType ==='new_session') || (platformDetails.optInFrequencyType ==='page_refresh')){
                                    SaveRequest({
                                        optin : true,
                                        optinType: platformDetails.optInType
                                    }, "optin");
                                    ShowOptin(platformDetails);
                                    optinStatus = "enable";
                                }else{
                                }
                            }
                            else {
                                if((platformDetails.optInFrequencyType ==='spec_time' && localStorage.getItem('optinShow') <= Date.now()) || (!sessionStorage.getItem('new_session') && platformDetails.optInFrequencyType ==='new_session') || (platformDetails.optInFrequencyType ==='page_refresh')){
                                    /*optinStatus = "enable";*/
                                        ShowOptin(platformDetails); 
                                    truepush.subscribeUserVapid();
                                }
                            }
                        }
                    },platformDetails.optinShowInterval*1000);
                }
            }
            
        }
        else
        {
            if(Notification.permission == 'denied')
            {
                ShowMessage('block')
            }
            else
            {
                /*ShowDefaultOptin(); */
                ShowMessage('request');
                truepush.subscribeUserVapid();                                            
            }
        }
        isSubscribed = false;
    };

    this.subscribeUserVapid =function(skipCheck) {
        if(browserData && browserData.browser && browserData.browser.name === 'Safari')
        {
            SubscribeToSafari();
            return;
        }
        if(Notification && Notification.permission!='granted' || skipCheck)
        {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.ready.then(function (reg) {
                    try
                    {
                        if(!permissionAllowed && !fromSubDomain)
                        {     
                            SaveRequest({
                                show: true,
                                optinType: platformDetails.optInType
                            },"show")
                        }
                        Notification.requestPermission().then(function(result){
                            localStorage.setItem('permission',Notification.permission);
                            if(optinStatus == 'enable')
                            truepush.HideOptin();
                            if (Notification.permission === 'denied') {
                                SaveRequest({
                                    block: true,
                                    optinType: platformDetails.optInType
                                }, "block");
                                SendRequest();
                                if(fromSubDomain)
                                {
                                    ShowMessage("block");
                                }
                            }
                            else if(Notification.permission === 'default') {
                                if(browserData.browser.name === 'Firefox')
                                {
                                    createCookie("permission", "blocked");
                                }
                                SaveRequest({
                                    ignore: true,
                                    optinType: platformDetails.optInType
                                }, "ignore");
                                SendRequest();
                            }
                            else if(Notification.permission === 'granted')
                            {
                                key = urlB64ToUint8Array(platformDetails.vapidDetails.publicKey);
                                reg.pushManager.subscribe({
                                    userVisibleOnly: true,
                                    applicationServerKey: key
                                }).then(function(sub) {

                                    subscription = CheckForKeys(sub);
                                    if(platformDetails.welcomeNotification && !skipCheck && !IsGcmSubscription(subscription) && !skipSubscriberReport)
                                        ShowWelcomeNotification(reg);
                                    if(optinStatus == 'enable')
                                        truepush.HideOptin();
                                    localStorage.setItem('permission','granted');
                                    if(fromSubDomain)
                                    {
                                        ShowMessage("success");
                                    }
                                    SaveSubscription(subscription)
                                }).catch(function(e) {
                                    if(Notification.permission === 'granted')
                                    {               
                                        console.log("ReSubscribe",e);     
                                        ReSubscribe();
                                    }
                                });
                            }
                        })
                    }
                    catch(e)
                    {
                    console.log("error in catch block ",e);
                    }
                }).catch( (error) => {
                    console.log("error iss ", error);
                });
            }
        }
    };

    function SaveSubscription(sub, isUpdate)
    {
        if(SubscriptionInLocalStorage(sub))
        {
            return;
        }
        if(IsGcmSubscription(sub))
        {
            return;
        }
        var obj = {
            "subscription":sub,
            "userPlatformId":platformDetails._id,
            "isChrome": isChrome(),
            "language": navigator.language || navigator.userLanguage,
            "optinType": platformDetails.optInType
        };
        if(isUpdate && browserData.browser.name === "Opera" && browserData.device.type === "mobile")
        {
            obj.forceUpdate = true;
        }
        if(sdkInformation.userConsent === "allowed_cookies_only")
        {
            obj.deniedPersonalData = true;
            delete obj.language;
        }
        if(defaultPermission === "granted")
        {
            obj.skipTriggers = true;
        }
        if(skipSubscriberReport)
        {
            obj.skipSubscriberReport = true;
        }
        var visitData = localStorage.getItem("tp-visitsData");
        if(visitData)
        {
            try{
                visitData = JSON.parse(visitData);
                obj.visitsData = PrepareRequestData(visitData);
            }
            catch(e){}
        }
        var route = 'https://sdk.truepush.com/api/v1/upsertSubscriber';
        HTTP.post(route, obj, options, function (error, data) {
            if(!skipSubscriberReport)
            {   
                /*SaveRequest({
                    subscribed: true,
                    optinType: platformDetails.optInType
                },"subscribed")*/
            }
            if(data && data.data)
            {
                SaveSubscriptionToLocalStorage(sub);
                localStorage.setItem("subscriberId", data.data);
                localStorage.removeItem("tp-visitsData");
            }
            if(error)
                console.log("error while making upsertsubscriber req");
        });
    }
    function SaveSubscriptionToLocalStorage(sub)
    {
        localStorage.setItem('subscription', JSON.stringify(sub));
    }
    function SubscriptionInLocalStorage(sub)
    {
        var localSub = localStorage.getItem("subscription");
        if(localSub && JSON.stringify(sub) === localSub)
            return true;
        return false;
    }
    function OpenSubdomainWindow() {
        if(optinStatus == 'enable'  && ( platformDetails.optInType === 'box' || platformDetails.optInType === 'bell' ||  platformDetails.optInType === 'top_bar'))
            truepush.HideOptin();
        var child;
        if(!EnableHTTPLocalTest)
        {
            child = window.open(platformDetails.altUrl+"/subscribe/"+ platformDetails._id,'HTTPSubscriptionWindow', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
        }
        else
        {
            child = window.open(host+"sub-domain/subscribe/"+platformDetails._id,'HTTPSubscriptionWindow', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
        }
        setTimeout(() => {
            SendDataToChild(child);
        },1000)
    }
    function SubscribeUser()
    {
        if(fromIframe)
        {
            /* var ifrm = window.frameElement; */
            /*var doc = ifrm.ownerDocument;*/
            return OpenSubdomainWindow();
        }
        if(browserData && browserData.browser && browserData.browser.name === 'Safari')
        {
            SubscribeToSafari();
            return;
        }
        return truepush.subscribeUserVapid();
    }

    function ShowMessage(type)
    {
        var element1 = document.getElementById("successDiv"); 
        var element2 = document.getElementById("requestDiv");
        var element3 =  document.getElementById("blockDiv");
        element1.style.display="none";
        element2.style.display="none";
        element3.style.display="none";

        if(type === 'request')
        {
            element2.style.display = "block";
        }
        else if(type === 'success')
        {
            element1.style.display="block";
            setTimeout( function(){
                self.close();
            },4000) 
            /*window.opener.ChangeSubscribeStatus("success") */
        }
        else if(type === 'block')
        {
            element3.style.display = "block";
        }
    }

function ShowWelcomeNotification(reg)
{
    var nObj = platformDetails.welcomeNotifTemplate;
   // console.log(nObj);
      var notifOptions = {};
      if(nObj.image)
        notifOptions.image = cdnUrl+"campaign_images/"+ decodeHtml(nObj.image);
      if(nObj.icon)
        notifOptions.icon =cdnUrl+"website_icons/"+ decodeHtml(nObj.icon);
      if(nObj.message)
        notifOptions.body = decodeHtml(nObj.message);
      if(nObj.isActionRequired){
        notifOptions.requireInteraction = true;
      }  
      notifOptions.data = platformDetails.welcomeNotifTemplate;
        if(nObj.url)
        {
            notifOptions.data.link = decodeHtml(nObj.url);
        }
        if(notifOptions.data)
        {
            notifOptions.data.skipReport = true; 
            notifOptions.data.isWelcomeNotification = true;
            notifOptions.data.platformId = platformDetails._id;
        }
        reg.showNotification(decodeHtml(nObj.title), notifOptions);
        var obj = {
            event: "view",
            platformId: platformDetails._id
        };
        var route = 'https://sdk.truepush.com/api/v1/welomeNotificationStats';
        HTTP.post(route, obj, options, function (error, data) {
            if(error)
                console.log("error while making upsertsubscriber req");
        });
    }

    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }
    function createCookie(name, value) {
    var date = new Date();
    date.setTime(date.getTime()+(10*1000));
    var expires = "; expires="+date.toGMTString();
    document.cookie = name+"="+value+expires+"; path=/";
    }
    function CanShowOptin()
    {
        if(browserData.browser.name === 'Firefox')
        {
            var match = document.cookie.match(new RegExp('(^| )permission=([^;]+)'));
            if (match) return false;
            return true;
        }
        return true;
    }
    function isChrome() {
        if(navigator && navigator.plugins)
        {
        for (var i=0; i < navigator.plugins.length; i++)
            if (navigator.plugins[i].name == "Chrome PDF Viewer")
                return true;
            return false;
        }
        return false;
    }
    function ReSubscribe()
    {
        navigator.serviceWorker.ready.then(function (reg) {
            reg.pushManager.getSubscription().then(function(sub) {
                if(sub)
                {
                    sub.unsubscribe().then(function(res) {
                        skipSubscriberReport = false;
                        truepush.subscribeUserVapid(true);
                    });
                }
                else
                {
                    console.log("subscription is null");
                }

            }).catch(function(e) {
                console.log("error while getting ReSubscribe", e);
            });
        }).catch(function(e) {
            console.log("error while ready ReSubscribe", e);
        })
    };
    this.Init = function(sdkInfo, callback) {
        var platformId = sdkInfo.id;
        if(!sdkInfo.userConsent)
        {
            sdkInfo.userConsent = "allowed_cookies_personal_data";
        }
        sdkInformation = sdkInfo;
        if(["allowed_cookies_only", "denied", "allowed_cookies_personal_data"].indexOf(sdkInfo.userConsent) < 0)
        {
            processStarted = true;
            if(callback)
                return callback("Invalid userConsent...!!!");
            return;   
        }
        if(sdkInformation.userConsent === "denied")
        {
            processStarted = true;
            return;
        }
        if(!sdkInformation.serviceWorkerFileName){
            sdkInformation.serviceWorkerFileName = "sw.js";
        }
        if(sdkInformation.serviceWorkerFileName){
            if(sdkInformation.serviceWorkerFileName.indexOf("/") != -1){
                processStarted = true;
                return callback("Invalid serviceWorkerFileName...!!!");    
            }
        }
        if(initialized && (fromSubDomain && !dataFromParentNotAvailable))
        {
            return;
        }
        initialized = true;
        if(!allowedInBrowser)
        {
            return;
        }
        if((fromIframe || fromSubDomain) && !dataFromParentNotAvailable ) {
            loadingObject.platformDetails = false;
            return;
        }
        getPlatformDetails(platformId, function(platformErr, platformResponse){
            if(platformResponse && platformResponse["status"] == 'SUCCESS')
            {
                try{
                    if(platformResponse.data != "SAME_DATA"){
                        platformDetails = platformResponse.data;
                        localStorage.setItem('platformDetails',JSON.stringify(platformDetails));
                    }else{
                        platformDetails = localStorage.getItem('platformDetails');
                        platformDetails = JSON.parse(platformDetails); 
                    }
                    if(ISPlatformDataValid(platformDetails))
                    {
                        if(!loadingObject.jsFiles)
                        {
                            if(!processStarted)
                                StartProcess();   
                            processStarted = true;
                        }
                    }
                    else
                    {
                        localStorage.removeItem('platformDetails');
                        console.log("platform data is not valid");
                    }
                }
                catch(e){}
                if(platformDetails && platformDetails.websiteSSL)
                {
                    SendAvailableTagRequests();
                }
            }
            else
            {
                console.log("Unable to service truepushsdk",platformErr);
            }   
        });
    };
    var getPlatformDetails = function(platformId, callback){
        /*if(fromIframe || fromSubDomain)
        {
            return;
        }*/
        if(platformDetails)
        {
            console.log("platform detils fuond ", platformDetails);
        }
       
        var route = host + "api/v1/truepushSDKPlatfromDetails";
        var data = {};
        data['platformId'] = platformId;
        if(version === 'v2')
        {
            data['version'] = 'v2';
        }
        if(localStorage.getItem('platformDetails')){
            var platformData = localStorage.getItem('platformDetails');
            platformData = JSON.parse(platformData); 
            if(platformData.updatedDate){
                data['updatedDate'] = platformData.updatedDate;
            }    
        }
        if( !(fromIframe || fromSubDomain))
        {
            if(sdkInformation.userConsent === "allowed_cookies_only")
                data.deniedPersonalData = true;
            data.visit = true;
            if (!localStorage.getItem("visited-tp")) {
                data.uniqueVisitors = true;
                localStorage.setItem("visited-tp", true);
            }
            var visitData = localStorage.getItem("tp-visitsData");
            if(visitData)
            {
                try{
                    visitData = JSON.parse(visitData);
                    data.visitsData = PrepareRequestData(visitData);
                }
                catch(e){}
            }
            var sub = localStorage.getItem("subscription");
            if(sub)
            {
                data.subscription = sub;
            }
        }
        HTTP.post(route, data, options, function (error, data) {
            if(!allowedInBrowser)
            {
                return;
            }
            if(!error)
            {
                localStorage.removeItem("tp-visitsData");
            }
            if(!platformDetails)
            {
                return callback(error, data);
            }
        });
    };
    var ISPlatformDataValid=  function(platformDetails)
    {
        try{
            if(!(platformDetails.customStyles && platformDetails.customStyles[platformDetails.optInType]))
            {
                platformDetails.customStyles = defaultOptinStyles[platformDetails.optInType];
            }
            else
            {
                platformDetails.customStyles = Object.assign({},platformDetails.customStyles[platformDetails.optInType]); 
            }
            loadingObject.platformDetails = false;
            if(platformDetails.optInType === 'top_bar' && !(platformDetails.customStyles.top === 0 || platformDetails.customStyles.bottom === 0))
            {
                platformDetails.customStyles.top=0;
                platformDetails.customStyles.bottom="";
            }
            if(!platformDetails.websiteSSL)
            {
                platformDetails.altUrl = GenerateAltURl(platformDetails);
            }
            if(!platformDetails.optinShowInterval)
                platformDetails.optinShowInterval = 0;
            if(!(platformDetails && platformDetails.vapidDetails && platformDetails.vapidDetails.publicKey))
            {
                platformDetails.vapidDetails = {
                    publicKey : defaultKey 
                };
            }
            if(!platformDetails.optInFrequencyType)
            {
                platformDetails.optInFrequencyType = "page_refresh";
            }
            return true;
        }
        catch(e){}
    };
    function StartProcess()
    {
        if(processStarted)
            return;
        processStarted = true;
        if(!fromSubDomain)
        {
            InsertToDOM(platformDetails);
        }
        if(fromIframe && !fromSubDomain)
        {
            BeginIFrameScript();
        }
        else if( (platformDetails.websiteSSL || fromSubDomain) && (browserData.browser.name.toLowerCase() != 'safari'))
        {
            BeginHTTPSVapid();
        }
        else if(browserData.browser.name.toLowerCase() == 'safari')
        {
            if(CheckIfAllowedToAskSafari(platformDetails))
            {
                webpushId = platformDetails.safariDetails.webPushId;
                BeginSafari();
            }
        }
        else
        {
            BeginHTTP();
        }
    }
    function BeginSafari()
    {
        if ('safari' in window && 'pushNotification' in window.safari) {
            var permissionData = window.safari.pushNotification.permission(webpushId);
            if (permissionData.permission === 'default') {
                if(platformDetails.optInType  != 'custom')
                {
                    setTimeout(function(){
                        if(platformDetails.optInType  != 'default' &&  platformDetails.optInType  != 'default+')
                        {
                            if((platformDetails.optInType === 'bell') ||  (platformDetails.optInFrequencyType ==='spec_time' && localStorage.getItem('optinShow') <= Date.now()) || (!sessionStorage.getItem('new_session') && platformDetails.optInFrequencyType ==='new_session') || (platformDetails.optInFrequencyType ==='page_refresh')){
                                SaveRequest({
                                    optin : true,
                                    optinType: platformDetails.optInType 
                                },"optin");
                                ShowOptin(platformDetails);
                                optinStatus = "enable";
                            }
                        }
                        else{
                            if((platformDetails.optInFrequencyType ==='spec_time' && localStorage.getItem('optinShow') <= Date.now()) || (!sessionStorage.getItem('new_session') && platformDetails.optInFrequencyType ==='new_session') || (platformDetails.optInFrequencyType ==='page_refresh')){
                                platformDetails.optInType = 'bell';
                                ShowOptin(platformDetails);
                                optinStatus = "enable";
                                /*SubscribeToSafari();*/
                            }
                        }
                    },platformDetails.optinShowInterval*1000);
                   
                }
            }
            else if(permissionData.permission === 'granted')
            {
                subscription = permissionData.deviceToken;
            }
        }
        
    }
    function BeginHTTP() 
    {
        try{
            DisplayOptin();      
        }
        catch(e){}
    }
    function DisplayOptin()
    {
        var optinName = (platformDetails.optInType ==="box+")?"box2":platformDetails.optInType;
        optinName = (optinName === "default+") ? "default2" : optinName;
        var div=document.createElement('div');
        /*div.setAttribute('class', 'iframe-optin-box');*/

        div.innerHTML="<iframe id='tp-iframe' onload='truepush.Iframloaded()' class='jklm-if-"+optinName+"'  style='bottom:"+platformDetails.customStyles.bottom+"px;top:"+platformDetails.customStyles.top+"px' src='"+platformDetails.altUrl+"/subscribe/"+platformDetails._id+"?fromIframe=true'>";

            var test=document.createElement('div');
            /*test.setAttribute('class', 'iframe-optin-box');*/

            test.innerHTML="<iframe id='tp-iframe' onload='truepush.Iframloaded()' class='jklm-if-"+optinName+"' style='bottom:"+platformDetails.customStyles.bottom+"px;top:"+platformDetails.customStyles.top+"px' src='"+host+"sub-domain/subscribe/"+platformDetails._id+"?fromIframe=true'>";
        if(EnableHTTPLocalTest)
        {
            div = test;
        }
        document.body.appendChild(div);
    }
    this.Iframloaded = function() {
        iFrameReference = document.getElementById("tp-iframe").contentWindow;
        SendDataToChild(iFrameReference);
    };
    function SendDataToChild(targetWindow)
    {
        if(targetWindow)
        {
            platformDetails.userConsent = sdkInformation.userConsent;
            targetWindow.postMessage(platformDetails, "*");
        }
    }
    function BeginIFrameScript()
    {
        if ( (Notification.permission!='granted' && localStorage && (!localStorage.getItem('permission') || localStorage.getItem('permission') === 'default')) || (Notification.permission === 'default'))
        {
            if(platformDetails.optInType != 'custom')
            {
                setTimeout(function(){
                    if(platformDetails.optInType != 'default' && platformDetails.optInType != 'default+')
                    {
                        if((platformDetails.optInType === 'bell') ||  (platformDetails.optInFrequencyType ==='spec_time' && localStorage.getItem('optinShow') <= Date.now()) || (!sessionStorage.getItem('new_session') && platformDetails.optInFrequencyType ==='new_session') || (platformDetails.optInFrequencyType ==='page_refresh')){
                            ShowOptin(platformDetails);
                            SaveRequest({
                                optin : true,
                                optinType: platformDetails.optInType
                            }, "optin");
                            optinStatus = "enable";
                        }
                    }
                    else
                    {
                        if((platformDetails.optInFrequencyType ==='spec_time' && localStorage.getItem('optinShow') <= Date.now()) || (!sessionStorage.getItem('new_session') && platformDetails.optInFrequencyType ==='new_session') || (platformDetails.optInFrequencyType ==='page_refresh')){
                            ShowOptin(platformDetails);
                            SubscribeUser();
                        }
                    }
                },platformDetails.optinShowInterval*1000);
            }
            isSubscribed = false;
        }
    }
    function SubscribeToSafari() 
    {
        if ('safari' in window && 'pushNotification' in window.safari) {
            var permissionData = window.safari.pushNotification.permission(webpushId);
            if (permissionData.permission === 'default') {
                window.safari.pushNotification.requestPermission(
                    host.slice(0,-1), 
                    webpushId, 
                    {platformId: platformDetails._id}, 
                    checkSafariPermission        
                );
            }
        };
    }
    function checkSafariPermission()
    {
        truepush.HideOptin();
        var permissionData = window.safari.pushNotification.permission(webpushId);
        localStorage.setItem('permission',permissionData.permission);
        if (permissionData.permission === 'denied') {
            SaveRequest({
                block: true,
                optinType: platformDetails.optInType
            }, "block");
            SendRequest();
        }
        else if (permissionData.permission === 'granted') {
            var obj = {
                platformId: platformDetails._id,
                subscription: permissionData.deviceToken
            };
            subscription =  permissionData.deviceToken;
            var route='https://sdk.truepush.com/api/v1/safari/addSubscriber';
            HTTP.post(route, obj, options, function (error, data) {
                SaveRequest({
                    subscribed: true,
                    optinType: platformDetails.optInType
                }, "subscribed");
                if(error)
                    console.log("error while making add subscriber req");
            });
        }
    };
    this.IsInitialized = function()
    {
        if(initialized)
            return true;
        return false;
    };
    this.GetUserConsent = function() {
        return sdkInformation.userConsent;
    };
    var defaultOptinStyles = {
        "box": {
            mainText: "Allow updates from truepush.com",
            firstBtnText: "Not now",
            subText: "You can turn it off whenever you like.",
            secondBtnText: "Allow",
            visibleStatus: "none"
        },
        "box+": any = {
            mainText: "Allow updates from truepush.com",
            firstBtnText: "Not now",
            secondBtnText: "Allow",
            visibleStatus: "none"
          },
        "top_bar": {
            barColor: "#000",
            textColor: "#fff",
            buttonColor: '#4A90E2',
            buttonTextColor: '#fff',
            barText: 'This is optinbar text information',
            buttonText: 'Subscribe to push notifications',
            top: 0,
            bottom: ''
        },
        "bell": {
            circleColor: '#F00',
            bellColor: '#fff'
        },
        "custom": {
            backgroundColor: '#4A90E2',
            textColor: '#fff',
            buttonText: 'Subscribe to push notifications'
        },
        "default": {},
        "default+": {}
    };
    this.push = function(initialize) {
        if(!initialized){
            initialized = true;
            initialize();
        }
    };
    this.GetSubscriberId = function(callback) {
        if(platformDetails && !platformDetails.websiteSSL)
        {
            subscriberIdCallback = callback;
            iFrameReference.postMessage({type: "getSubscriberId"}, "*");
            return;
        }
        if(Notification.permission != "granted")
        {
            return callback( "Permission not granted", null);
        }
        if(!IsScriptInitialized())
        {
            return callback( "Script not yet initialized", null);
        }

        var subscriberId = localStorage.getItem("subscriberId");
        if(subscriberId )
        {
            return callback(null,subscriberId);
        }
        GetVapidSubscription(function(subscription) {
            if(!subscription)  
            {
                callback( "subscription not found", null);
            }
            var route ="https://sdk.truepush.com/api/v1/getSubscriberId";
            var data = {
                userPlatformId: platformDetails._id,
                subscription: subscription
            };
            HTTP.post(route, data, options, function (error, subscriberData) {
                if (error) {
                    return callback( "Unable to serve subscriberId", null);
                }
                if (subscriberData.status == "ERROR") {
                    return callback(data.message, null);
                }
                if(!(subscriberData && subscriberData.data))
                {
                    return callback( "Unable to serve subscriberId", null);
                }
                localStorage.setItem("subscriberId", subscriberData.data);
                return callback(null, subscriberData.data);
            });
        })
    }
    function GetSubscriberIdHttp(callback)
    {
        var subscriberIdResponse = {};
        if(Notification.permission != "granted")
        {
            subscriberIdResponse = {
                error: "Permission not granted",
                result: null
            }
            return callback(subscriberIdResponse);
        }
        if(!IsScriptInitialized())
        {
            subscriberIdResponse = {
                error: "Script not yet initialized",
                result: null
            }
            return callback(subscriberIdResponse);
        }
        var subscriberId = localStorage.getItem("subscriberId");
        if(subscriberId )
        {
            subscriberIdResponse = {
                error: null,
                result: subscriberId
            }
            return callback(subscriberIdResponse);
        }
        GetVapidSubscription(function(subscription) {
            if(!subscription)  
            {
                subscriberIdResponse = {
                    error: "Subscription not found",
                    result: null
                }
                return callback(subscriberIdResponse);
            }
            var route ="https://sdk.truepush.com/api/v1/getSubscriberId";
            var data = {
                userPlatformId: platformDetails._id,
                subscription: subscription
            };
            HTTP.post(route, data, options, function (error, subscriberData) {
                if (error) {
                    subscriberIdResponse = {
                        error: "Unable to serve subscriberId",
                        result: null
                    }
                    return callback(subscriberIdResponse);
                }
                if (subscriberData.status == "ERROR") {
                    subscriberIdResponse = {
                        error: data.message,
                        result: null
                    }
                    return callback(subscriberIdResponse);
                }
                if(!(subscriberData && subscriberData.data))
                {
                    subscriberIdResponse = {
                        error:  "Unable to serve subscriberId",
                        result: null
                    }
                    return callback(subscriberIdResponse);
                }
                subscriberIdResponse = {
                    error:  null,
                    result: subscriberData.data
                }
                localStorage.setItem("subscriberId", subscriberData.data);
                return callback(subscriberIdResponse);
            });
        })
    }
    function CheckScriptLocation () {
        if(IsinIframe())
        {
            fromIframe = true;
            iFrameParentReference = window.parent;
        }
        if(window.name && window.name == 'HTTPSubscriptionWindow')
        {
            fromSubDomain = true;
        }
        else if(window.location.href.indexOf(subDomainsHost)>=0 && !fromIframe)
        {
            fromSubDomain = true;
        }
        /*else if(window.location.href.indexOf("/subscribe/") >= 0 && window.location.href.indexOf("fromIframe") == -1)
        {
            fromSubDomain = true;
        }*/
    }
    function IsinIframe () {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }

    /* truepush add tags script */

    var GetVapidSubscription = function (cb) {
        if(Notification.permission != "granted")
        {
            return cb(null);
        }
        if(subscription)
        {
            return cb(subscription);
        }
        if(fromIframe)
        {
            var localSubscription = localStorage.getItem("subscription");
            if(localSubscription)
            {
                try
                {
                    localSubscription = CheckForKeys(JSON.parse(localSubscription));
                    return cb(localSubscription);
                }
                catch(e)
                {
                    return cb(null);
                }
            }
            return cb(null);
        }
        navigator.serviceWorker.ready.then(function (reg) {
            reg.pushManager.getSubscription().then(function(sub) {
                return cb(CheckForKeys(sub));
            }).catch(function(e) {
                return cb(null);
            });
        }).catch(function(e) {
            return cb(null);
        })
    };
    var baseUrl = "https://sdk.truepush.com/api/v1/";
    this.getTags = function (callback) {
        IsAllowedToAddTags(function(error){
            if(error)
            {
                if(error.statusCode === "INIT-ERROR")
                {
                    tagsToGet = {
                        callback: callback
                    }
                    return;
                }
                return callback(error, null);
            };
            RemoveTagsFromVariable('get');
            var route = baseUrl + "getTags";
            var data = {
                userPlatformId: platformDetails._id
            };
            GetVapidSubscription(function(sub){
                if(!sub)
                {
                    return callback({
                        message: "Notification permission not granted.",
                        status: "ERROR",
                        statusCode: "SUBSCRIPTION-ERROR"
                    }, null);
                }
                data["subscription"]=sub;
                HTTP.post(route, data, options, function (error, data) {
                    if (error) {
                        return callback({
                            message: "Something went wrong. Please try again.",
                            status: "ERROR",
                            statusCode: "INS-ERROR"
                        }, null);
                    }
                    if (data.status == "ERROR") {
                        return callback(data, null);
                    }
                    return callback(null, data);
                });
            })
        })
    };

    this.removeTags = function (tags, callback) {
        IsAllowedToAddTags(function(error) {
            if(error)
            {
                if(error.statusCode === "INIT-ERROR")
                {
                    tagsToRemove = {
                        tags: tags,
                        callback: callback
                    }
                    return;
                }
                return callback(error, null);
            }
            RemoveTagsFromLocalStorage(tags);
            RemoveTagsFromVariable('remove');
            var route = baseUrl + "removeTags";
            if (!tags || !tags.length) {
                return callback({
                    message: "Tags shouldn't be empty.",
                    status: "ERROR",
                    statusCode: "VALIDATION-ERROR"
                }, null);
            }
            var data = {
                userPlatformId: platformDetails._id,
                tags: tags
            };
            GetVapidSubscription(function(sub){
                if(!sub)
                {
                    return callback({
                        message: "Notification permission not granted.",
                        status: "ERROR",
                        statusCode: "SUBSCRIPTION-ERROR"
                    }, null);
                }
                data["subscription"]=sub;
                HTTP.post(route, data, options, function (error, data) {
                    if (error) {
                        return callback({
                            message: "Something went wrong. Please try again.",
                            status: "ERROR",
                            statusCode: "INS-ERROR"
                        }, null);
                    }
                    if (data.status == "ERROR") {
                        return callback(data, null);
                    }
                    return callback(null, data);
                });
            })
        })
    };

    this.addTags = function (tags, callback) {
        IsAllowedToAddTags(function(error){
            if(error)
            {
                if(error.statusCode === "INIT-ERROR")
                {
                    tagsToAdd = {
                        tags: tags,
                        callback: callback
                    }
                    return;
                }
                return callback(error, null);
            }
            var route = baseUrl + "addTags";
            if (!tags || !tags.length) {
                return callback({
                    message: "Tags shouldn't be empty.",
                    status: "ERROR",
                    statusCode: "VALIDATION-ERROR"
                }, null);
            }
            var newTags = RemoveExistingTags(tags);
            RemoveTagsFromVariable('add');
            if(newTags.length === 0)
            {
                return callback(null,{
                    message: "Tags added successfully.",
                    status: "SUCCESS",
                    status_code: "SUCCESS"
                });
            }
            var data = {
                userPlatformId: platformDetails._id,
                tags: newTags
            };
            GetVapidSubscription(function(sub){
                if(!sub)
                {
                    return callback({
                        message: "Notification permission not granted.",
                        status: "ERROR",
                        statusCode: "SUBSCRIPTION-ERROR"
                    }, null);
                }
                data["subscription"]=sub;
                HTTP.post(route, data, options, function (error, data) {
                    if (error) {
                        return callback({
                            message: "Something went wrong. Please try again.",
                            status: "ERROR",
                            statusCode: "INS-ERROR"
                        }, null);
                    }
                    if (data.status == "ERROR") {
                        return callback(data);
                    }
                    localStorage.setItem('tags', JSON.stringify({tags: tags}));
                    return callback(null, data);
                });
            })
        })
    };
    var IsAllowedToAddTags = function(callback) {
        var error = {
            message: "Notification permission not granted.",
            status: "ERROR",
            statusCode: "SUBSCRIPTION-ERROR"
        }
        if(!initialized)
        {
            error.message = "truepush sdk is not initialized";
            error.statusCode = "INIT-ERROR";
            return callback(error);
        }
        if(sdkInformation.userConsent != "allowed_cookies_personal_data")
        {
            error.message = "consent denied";
            error.statusCode = "CONSENT-DENIED";
            return callback(error);
        }
        if(!platformDetails)
        {
            error.message = "platformdetails are not ready";
            error.statusCode = "INIT-ERROR";
            return callback(error);
        }
        if(!platformDetails.websiteSSL)
        {
            error.message = "Tags support for http websites is not available yet.";
            error.statusCode = "HTTP-ERROR";
            return callback(error);
        }
        if(Notification.permission != "granted")
        {
            return callback(error);
        }
        return callback(null);
    }
    var IsScriptInitialized = function() {
        if(!initialized)
        {
            return false;
        }
        if(!platformDetails)
        {
            return false;
        }
        return true;
    }
    var RemoveExistingTags = function(tags)
    {
        var existingTags = localStorage.getItem("tags");
        if(!existingTags)
            return tags;
        try{
            existingTags = JSON.parse(existingTags);
            existingTags = existingTags.tags;
            var newTags = [];
            for(var i=0; i < tags.length; i++)
            {
                var ind = existingTags.findIndex(function(elm){
                    return elm.tagName === tags[i].tagName && elm.tagValue === tags[i].tagValue && elm.tagType === tags[i].tagType;
                });
                if(ind == -1)
                    newTags.push(tags[i]);
            }
            return newTags;
        }
        catch(e)
        {
            localStorage.removeItem("tags");
            return tags;    
        }
    }

    var RemoveTagsFromLocalStorage = function(tags)
    {
        var existingTags = localStorage.getItem("tags");
        if(!existingTags)
            return;
        try{
            existingTags = JSON.parse(existingTags);
            existingTags = existingTags.tags;
            var newTags = [];
            for(var i=0; i < existingTags.length; i++)
            {
                var ind = tags.findIndex(function(elm){
                    return elm.tagName === existingTags[i].tagName && elm.tagValue === existingTags[i].tagValue ;
                });
                if(ind == -1)
                    newTags.push(existingTags[i]);
            }
            if(newTags.length  != existingTags.length && newTags.length > 0)
            {
                localStorage.setItem('tags', JSON.stringify({tags: newTags}));
            }
            if(newTags.length == 0)
                localStorage.removeItem("tags");
            return;
        }
        catch(e)
        {
            localStorage.removeItem("tags");
            return tags;    
        }
    }
    this.GetPlatformDetails1 = function() {
        return testStr;
    }
    var SendAvailableTagRequests = function() {
        if(tagsToAdd)
        {
            truepush.addTags(tagsToAdd.tags,tagsToAdd.callback)
        }
        if(tagsToRemove)
        {
            truepush.removeTags(tagsToRemove.tags,tagsToRemove.callback)
        }
        if(tagsToGet)
        {
            truepush.getTags(tagsToGet.callback)
        }
        return;
    }
    var RemoveTagsFromVariable = function(from) {
        if(from === "get")
        {
            tagsToGet = null;
        }
        if(from === "add")
        {
            tagsToAdd = null;
        }
        if(from === "remove")
        {
            tagsToRemove = null;
        }
    }

    var ListenForPermissionChange = function() {
        if ('permissions' in navigator) {
            navigator.permissions.query({name:'notifications'}).then(function(notificationPerm) {
                notificationPerm.onchange = function() {
                    if(notificationPerm.state == "prompt")
                    {
                        localStorage.setItem("permission", "default");
                        localStorage.removeItem("subscriberId");
                        localStorage.removeItem("subscription");
                        localStorage.removeItem("tags");
                    }
                    if(notificationPerm.state == "denied")
                    {
                        localStorage.setItem("permission", "denied");
                    }
                };
            });
        }
    };
    ListenForPermissionChange();

});  

window.addEventListener("load", function () {
    if(window.truepush)
    {
        var sdkDetails = window.truepush;
    }
    if(!window.truepush || !window.truepush.Init){
        truepush = new truepushSDK();
    }else{
    //    console.log("Already initialize truepush.");
    }

    if(!truepush.IsInitialized() && sdkDetails && sdkDetails[0])
    {
     //   console.log("called normal ", truepush.IsInitialized());
        sdkDetails[0]();
    }
});
