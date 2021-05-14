const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const videoElement = $('.video')
const menuElement = $('.container-menu')
const menuBigElement = $('.container-menu-big')
const menuButton = $('.menu-btn')
const userBtn = $('.user-avt-btn')
const modal = $('.modal')
const userSettings = $('.user-settings')
const themeSettings = $('.theme-settings')
const themeBtn = $('.theme-options')
var isLight = true
var isMenu = false
var isThemeSettings = false
var isUserSettings = false

const videoSections = [
    {
        id:1,
        title: '',
        isSpecial: false,
        videos: [
            {
                id:1,
                title: "Dăm ba cái cách HACK SẬP một trang web - Hack cùng Code Dạo",
                thumb: "./asset/img/video1.webp",
                channel:"Feliks Zemdegs",
                channelImage: "./asset/img/channel1.jpg",
                view: "1,9 Tr",
                time: "2 giờ trước"
            },
            {
                id:2,
                title: "Dăm ba cái cách HACK SẬP một trang web - Hack cùng Code Dạo",
                thumb: "./asset/img/video1.webp",
                channel:"Feliks Zemdegs",
                channelImage: "./asset/img/channel1.jpg",
                view: "1,9 Tr",
                time: "2 giờ trước"
            },
            {
                id:3,
                title: "Dăm ba cái cách HACK SẬP một trang web - Hack cùng Code Dạo",
                thumb: "./asset/img/video1.webp",
                channel:"Feliks Zemdegs",
                channelImage: "./asset/img/channel1.jpg",
                view: "1,9 Tr",
                time: "2 giờ trước"
            },
            {
                id:4,
                title: "Dăm ba cái cách HACK SẬP một trang web - Hack cùng Code Dạo",
                thumb: "./asset/img/video1.webp",
                channel:"Feliks Zemdegs",
                channelImage: "./asset/img/channel1.jpg",
                view: "1,9 Tr",
                time: "2 giờ trước"
            },
            {
                id:5,
                title: "Dăm ba cái cách HACK SẬP một trang web - Hack cùng Code Dạo",
                thumb: "./asset/img/video1.webp",
                channel:"Feliks Zemdegs",
                channelImage: "./asset/img/channel1.jpg",
                view: "1,9 Tr",
                time: "2 giờ trước"
            },
        ],
        
    },
    {
        id:2,
        title: 'Tin tức về dịch Covid-19',
        isSpecial: true,
        videos: [
            {
                id:2,
                title: "Dăm ba cái cách HACK SẬP một trang web - Hack cùng Code Dạo",
                thumb: "./asset/img/video1.webp",
                channel:"Feliks Zemdegs",
                channelImage: "./asset/img/channel1.jpg",
                view: "1,9 Tr",
                time: "2 giờ trước",
                isChecked: true
            }
        ]
    }
]
var videoSectionHtml = videoSections.map(function(curr) {
    var videosHTML = curr.videos.map(function(video) {
        return `
            <div class="video-cotainer">
                <a href=""><img src="${video.thumb}" alt="" class="video-thumb"></a>
                <div class="video-body">
                    <a class="video-channel" href=""><img src="${video.channelImage}" alt="" class="video-channel-img"></a>
                    <a href="" class="video-body-text">
                        <h4 class="video-title">${video.title}</h4>
                        <p class="video-channel-name ${video.isChecked ? "checked": ""}">${video.channel}
                            <svg class="checked-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                        </p>
                        <p class="video-desc">
                        <span class="video-view">${video.view}</span> •
                        <span class="video-time-upload">${video.time}</span>
                        </p>
                    </a>
                </div>
            </div>
        
        `
    })
    
    return `
            <div class="video-section ${curr.isSpecial ? "special" : ""}">
                <h2 class="video-section-title">${curr.title}</h2>
                <div class="video-section-body">
                    ${videosHTML.join('')}
                </div>
            </div>
    `
}) 
videoElement.innerHTML = videoSectionHtml.join('')
function renderMenu() {
    if(isMenu) {
        videoElement.style = 'margin-left: calc(18% + 12px);'
        videoElement.style.width = '82%'
        menuElement.style.display = 'none'
        menuElement.style.animation = 'fadeOut linear 0.3s forwards;'
        menuBigElement.style.display = 'block'
    } else {
        videoElement.style = ''
        menuElement.style.display = 'block'
        menuBigElement.style.display = 'none'
    }
}
function renderUserSettings() {
    if(isUserSettings) {
        modal.style.display = 'block'
        userSettings.style.display = 'block'
        userSettings.style.animation = 'fadeIn linear 0.1s'
    } else {
        modal.style.display = 'none'
        userSettings.style.display = 'none'

    }
}
function renderThemeSettings() {
    if(isThemeSettings) {
        modal.style.display = 'block'
        userSettings.style.display = 'none'
        themeSettings.style.display = 'block'
        themeSettings.style.animation = 'fadeIn linear 0.1s'
    } else {
        modal.style.display = 'none'
        userSettings.style.display = 'none'
        themeSettings.style.display = 'none'
    }
}
menuButton.onclick = function() {
    isMenu = !isMenu
    renderMenu()
}
userBtn.onclick = function() {
    isUserSettings = true
    renderUserSettings()
}
modal.onclick = function(e) {
    
    isThemeSettings = false
    isUserSettings = false
    renderThemeSettings()
    renderUserSettings()
}
userSettings.onclick = function(e) {
    e.stopPropagation()
}
themeBtn.onclick = function(e) {
    isThemeSettings = true
    renderThemeSettings()
}
themeSettings.onclick = function(e) {
    e.stopPropagation()
}
function renderTheme() {
    if(isLight) {
        $(':root').style.setProperty('--primary-color', '#fff')
        $(':root').style.setProperty('--border-color', '#cfcfcf')
        $('html').style = ''
        $$('.active .menu-icon')[0].style = ''
        $$('.active .menu-icon')[1].style = ''
        $$('.video-section.special').forEach(curr => {
            curr.style = ''
        })
        $$('.video-section-title').forEach(curr => {
            curr.style = ''
        })
        $('.search-input').style = ''
        $('.search-input').style = ''
        $('.search-button').style = ''
        $('.search-button').style = ''
        $('.search-icon').style = ''
        $$('.header span').forEach(curr => {
            curr.style = ''
        })
        $$('.st2').forEach(curr => {
            curr.style = ''
        })
        for(var i = 0; i < $$('p').length; i++) {
            $$('p')[i].style = 'f'
        }
        for(var i = 0; i < $$('.video-title').length;i ++) {
            $$('.video-title')[i].style = ''
        }
    } else {

        $(':root').style.setProperty('--primary-color', '#202020')
        $(':root').style.setProperty('--border-color', '#5a5a5a')
        $('html').style.backgroundColor = '#181818'
        $$('.active .menu-icon')[0].style = 'color: #fff'
        $$('.active .menu-icon')[1].style = 'color: #fff'
        $$('.video-section.special').forEach(curr => {
            curr.style.borderColor = '#303030'
        })
        $$('.video-section-title').forEach(curr => {
            curr.style.color = '#fff'
        })
        $('.search-input').style.backgroundColor = '#121212'
        $('.search-input').style.borderColor = 'transparent'
        $('.search-button').style.backgroundColor = '#323232'
        $('.search-button').style.borderColor = 'transparent'
        $('.search-icon').style.color = '#4d4d4d'
        $$('.header span').forEach(curr => {
            curr.style.color = '#fff'
        })
        $$('.st2').forEach(curr => {
            curr.style.fill = '#fff'
        })
        for(var i = 0; i < $$('p').length; i++) {
            $$('p')[i].style = 'color:#fff'
        }
        for(var i = 0; i < $$('.video-title').length;i ++) {
            $$('.video-title')[i].style = 'color:#fff'
        }
    }
}
renderTheme()

$('.dark-theme').onclick = function(e) {
    isThemeSettings = false
    renderThemeSettings()
    isLight = false
    renderTheme()
}
$('.light-theme').onclick = function(e) {
    isThemeSettings = false
    renderThemeSettings()
    isLight = true
    renderTheme()
}