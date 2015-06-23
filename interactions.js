// var imageParagraph = document.getElementById('imgP');
// imageParagraph.addclass('animated bounceIn');
// var fieldParagraph = document.getElementById('fieldP');
// fieldParagraph.addclass('animated bounceIn');
// var paragraph = document.getElementById('paragraph');
// paragraph.addclass('animated flipInY')
var hover = (function()
{
    function mouseMoveF(e)
    {
        if(!this.shel && this.classList.contains('hidden'))
        {
            this.classList.remove('hidden');
            return;
        }

        if(this.shel.classList.contains('hidden'))
        {
            this.shel.classList.remove('hidden');
            return;
        }
    }

    function mouseOutF(e)
    {
        if(!this.shel)
        {
            this.classList.add('hidden');
            return;
        }

        this.shel.classList.add('hidden');
    }

    function moveShow(el, shel)
    {
        el.shel = shel;

        el.addEventListener('mousemove', mouseMoveF);
        el.addEventListener('mouseout', mouseOutF);

        shel.addEventListener('mousemove', mouseMoveF);
        shel.addEventListener('mouseout', mouseOutF);

        shel.classList.add('hidden');
    }

    return {
        moveShow: moveShow,
        mouseOutF: mouseOutF,
        mouseMoveF: mouseMoveF
    };
})();
