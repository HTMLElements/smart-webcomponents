
/* Smart HTML Elements v6.0.0 (2020-Jan) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-rating",class extends Smart.BaseElement{static get properties(){return{max:{value:5,type:"number"},name:{value:"rating",type:"string"},value:{value:3,type:"number"}}}static get listeners(){return{"stars.click":"_clickHandler","stars.move":"_moveHandler","stars.mouseout":"_mouseoutHandler"}}attached(){this.value>this.max&&(this.value=this.max),this._updateActiveStars(this.value)}template(){return`<div id="container" role="presentation">
                    <div id="stars" class="smart-content" role="presentation">
                        <template>
                            <div id="ratingStars" *items={{max}} role="presentation"><span class="rating-star" index={{item}} role="button" aria-label="Star"></span></div>
                        </template>
                    </div>
                    <input class="smart-hidden" value="[[value]]" name="[[max]]"></input>
                </div>`}render(){const a=this;a.setAttribute("role","group"),a.$.stars.firstElementChild.setAttribute("role","presentation"),super.render()}_clickHandler(a){if(a.target.className.includes("rating-star")){const b=a.target,c=b.parentNode,d=Array.prototype.indexOf.call(c.children,b);this.value=d+1,this._updateActiveStars(this.value),this._updateHoveredStars(0)}}_moveHandler(a){const b=this,c=this.querySelector("#ratingStars"),d=a=>{const b=a.getBoundingClientRect();return{left:b.left+window.scrollX,top:b.top+window.scrollY}},e=(()=>{const c=b.querySelectorAll("#ratingStars .rating-star");for(let b=0;b<c.length;b++){const e=d(c[b]);if(a.x>=e.left&&a.x<=e.left+c[b].offsetWidth)return b}})();b._updateHoveredStars(e+1)}_mouseoutHandler(){this._updateHoveredStars(0)}_updateActiveStars(a){const b=this.getElementsByClassName("rating-star");for(let c=0;c<b.length;c++)c<a?b[c].classList.add("active"):b[c].classList.remove("active")}_updateHoveredStars(a){const b=this.getElementsByClassName("rating-star");for(let c=0;c<b.length;c++)c<a?b[c].classList.add("hover"):b[c].classList.remove("hover")}});