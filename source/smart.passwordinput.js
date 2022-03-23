
/* Smart UI v13.1.1 (2022-03-23) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-password-input",class extends Smart.Input{render(){const t=this;super.render(),t.$.input.autocomplete="new-password",t.classList.add("smart-input"),t.$.input.type="password",t.$.input.readonly=!0,t.$.input.onclick=()=>{t.$.input.removeAttribute("readonly")},t.$.arrow.onpointerdown=e=>{if(t.$.arrow.classList.contains("off")){t.$.arrow.classList.remove("off");const e=t.$.input.selectionStart,n=t.$.input.selectionEnd;t.$.input.type="password",t.$.input.setSelectionRange(e,n)}else{t.$.arrow.classList.add("off");const e=t.$.input.selectionStart,n=t.$.input.selectionEnd;t.$.input.type="text",t.$.input.setSelectionRange(e,n)}e.stopPropagation(),e.preventDefault()}}});