
/* Smart UI v12.0.0 (2022-01-16) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-password-input",class extends Smart.Input{render(){const t=this;super.render(),t.$.input.autocomplete="new-password",t.classList.add("smart-input"),t.$.input.type="password",t.$.arrow.onpointerdown=s=>{if(t.$.arrow.classList.contains("off")){t.$.arrow.classList.remove("off");const s=t.$.input.selectionStart,e=t.$.input.selectionEnd;t.$.input.type="password",t.$.input.setSelectionRange(s,e)}else{t.$.arrow.classList.add("off");const s=t.$.input.selectionStart,e=t.$.input.selectionEnd;t.$.input.type="text",t.$.input.setSelectionRange(s,e)}s.stopPropagation(),s.preventDefault()}}});