function convertLayout(input) {
    // get links
    const originalLinkElements = input.getElementsByClassName('originalLink-Azwuo9');
    const links = [];
    for (const element of originalLinkElements) {
        const rawLink = element.href;
        const questionmarkPosition = rawLink.indexOf("?");
        links.push(rawLink.substring(0, questionmarkPosition));
    }

    const output = document.createElement('div');
    output.classList = "container-2sjPya";
    output.id = "message-accessories-1159041600870158446";

    const mediaAttachmentContainer = document.createElement('div');
    mediaAttachmentContainer.classList = "mediaAttachmentsContainer-1WGRWy";
    output.appendChild(mediaAttachmentContainer);

    const oneByOneGrid = document.createElement('div');
    oneByOneGrid.classList = "oneByOneGrid-3Cl27N oneByOneGridSingle-2ss-Zx imageDetailsAdded-sda9Fa";
    mediaAttachmentContainer.appendChild(oneByOneGrid);

    const messageAttachment = document.createElement('div');
    messageAttachment.classList = "messageAttachment-CZp8Iv messageAttachmentNoJustify-lIzP9c messageAttachmentMediaMosaic-2ic1yt hideOverflow-bsO1Md";
    oneByOneGrid.appendChild(messageAttachment);

    const imageContent = document.createElement('div');
    imageContent.classList = "imageContent-3Av-9c embedWrapper-1MtIDg attachmentContentContainer-3WAhvQ attachmentContentItem-UKeiCx obscured-20kiwN";
    messageAttachment.appendChild(imageContent);

    for (const link of links) {
        const imageContainer = document.createElement('div');
        imageContainer.classList = "imageContainer-10XenG";
        imageContent.appendChild(imageContainer);

        const emptyDivLol = document.createElement('div');
        imageContainer.appendChild(emptyDivLol);

        const imageWrapper = document.createElement('div');
        imageWrapper.classList = "imageWrapper-oMkQl4 imageZoom-3yLCXY clickable-LksVCf lazyImgContainer-3k3gRy";
        imageWrapper.style = "display: block; max-height: inherit; margin: auto; width: 362px; height: 100%;";
        emptyDivLol.appendChild(imageWrapper);

        const originalLink = document.createElement('a');
        originalLink.tabIndex = "-1";
        originalLink.ariaHidden = "true";
        originalLink.classList = "originalLink-Azwuo9";
        originalLink.href = link;
        imageWrapper.appendChild(originalLink);

        const clickableWrapper = document.createElement('div');
        clickableWrapper.classList = "clickableWrapper-2WTAkL";
        clickableWrapper.tabIndex = "0";
        clickableWrapper.ariaLabel = "Image";
        clickableWrapper.setAttribute('aria-describedby', "uid_4");
        clickableWrapper.role = "button";
        imageWrapper.appendChild(clickableWrapper);

        const lazyImg = document.createElement('img');
        lazyImg.classList = "lazyImg-ewiNCh";
        lazyImg.alt = "Image";
        lazyImg.src = link;
        lazyImg.style = "display: block; object-fit: cover; min-width: 100%; min-height: 100%; max-width: calc(100% + 1px);";
        clickableWrapper.appendChild(lazyImg);

        const imageDetails = document.createElement('span');
        imageDetails.classList = "imageDetails-1t6Zms";
        emptyDivLol.appendChild(imageDetails);

        const fileName = document.createElement('a');
        fileName.classList = "anchor-1X4H4q anchorUnderlineOnHover-wiZFZ_";
        fileName.href = link;
        fileName.role = "button";
        fileName.tabIndex = "0";
        fileName.innerHTML = link.substring(link.lastIndexOf('/') + 1);
        imageDetails.appendChild(fileName);
    }

    return output;
}

var converted = convertLayout(document.getElementById("input"));
var outDiv = document.getElementById("output");
outDiv.appendChild(converted);
