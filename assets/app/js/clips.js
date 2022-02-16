const  template_01 = (itemData) =>{
    return `
        <div class="swiper-slide story" item>

            <a class="item-link" href="">

                <!--Main Container-->
                <span class="item-preview">

                    <div back-image image-holder><img src="${getIt(itemData,'currentPreview')}" alt=""><div></div></div>

                    <div profile-image >
                        <div image-holder><img src="${getIt(itemData,'photo')}" alt=""></div>
                    </div>

                    <div details>
                        <p>${getIt(itemData,'name')}</p>
                        <span>${getIt(itemData,'lastUpdated')}</span>
                    </div>

                </span>

                <!--Hidden Name-->                
                <span class="info" itemProp="author" itemScope="" itemType="http://schema.org/Person">
                    <strong class="name" itemProp="name">${getIt(itemData,'name')}</strong>
                    <span class="time"></span>
                </span>

            </a>

            <!--Container for story items-->
            <ul class="items"></ul>

        </div>
  `;
}