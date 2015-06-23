var ScrollHandler = (function()
{
    function ScrollHandler()
    {
        this.scrollEls = [];
        window.addEventListener('scroll', this.scrollFunc.bind(this));
    }
    var sp = ScrollHandler.prototype;

    sp.addEl = function addEl(el, cb)
    {
        var elO = {
            el: el,
            cb: cb
        };

        this.scrollEls.push(elO);
    };

    sp.checkEl = function checkEl(el)
    {
        var cr = el.getClientRects()[0];

        var t = cr.top,
            b = cr.bottom,
            h = cr.height;

        return (t <= h && (b - h) <= h);
    };

    sp.scrollFunc = function scrollFunc()
    {
        var se = this.scrollEls;

        for(var i = 0, e = se.length; i < e; i++)
            if(this.checkEl(se[i].el))
                se[i].cb.call(el);
    };

    return ScrollHandler;
})();
