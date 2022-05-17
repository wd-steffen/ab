
const mainMenu = document.querySelector('#mainNavigation')
const searchBtn = document.querySelector('#searchBtn').onclick = () => {
    mainMenu.classList.toggle('no-menu');
    console.log('no-menu');
}



//slider check

const sliderBlock = document.querySelector('.cms-block-image-slider')
const bannerClass = 'banner'
const baseSlider = document.querySelector('.image-slider')
const containerMain = document.querySelector('.container-main')

// let sliderAutoplayEnable = JSON.parse('p-banner-slider-autoplay-enable"')

function checkClass(){
    if(containerMain.contains(sliderBlock)){
            if(sliderBlock.classList.contains(bannerClass)){
                let attribute = document.querySelector('div[data-base-slider-options]')
                attribute.dataset.baseSliderOptions = '{"slider":{"navPosition":"bottom","speed":"800","autoplay":true,"autoplayButtonOutput":false,"keyboard":true,"mouseDrag":true,"nav":true,"controls":false,"autoHeight":false}}'
                // attribute.dataset.baseSliderOptions = `{"slider":{"navPosition":"bottom","speed":"800","autoplay": ${sliderAutoplayEnable},"autoplayButtonOutput":false,"keyboard":true,"mouseDrag":true,"nav":true,"controls":false,"autoHeight":false}}`
            }
        }
    }


checkClass()
// console.log(sliderAutoplayEnable);
// const configuratorGroup = document.querySelectorAll('.product-detail-configurator-group')
// console.log(configuratorGroup);


const body = document.querySelector('body')
const cmsBlocks = document.querySelectorAll('.cms-block')

function checkBlock(){
    for(let i = 0; i < cmsBlocks.length; i++){
        if(body.contains(cmsBlocks[i])){
            cmsBlocks[i].style.background = '#fff'
            // cmsBlocks[i].style.borderLeft = '1px solid #eee'
            // cmsBlocks[i].style.borderRight = '1px solid #eee'
            // cmsBlocks[i].style.border = '1px solid #eee'
            cmsBlocks[i].style.marginBottom = '20px'

            console.log(cmsBlocks[i]);
        }
  
    }
}

checkBlock()
