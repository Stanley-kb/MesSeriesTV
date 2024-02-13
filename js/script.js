
$('[name="jaime"]').on({
    click: function () {
        var imgElement = $(this).parent().find('.imgSeries');

        imgElement.attr('src', 'img/miniature_like.png');
    }
});