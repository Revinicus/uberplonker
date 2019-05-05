function getElementsByText(str, tag = 'a') {
  return Array.prototype.slice.call(document.getElementsByTagName(tag)).filter(el => el.textContent.trim() === str.trim());
}
plonks = getElementsByText('(plonked)');

plonks.forEach(function(plonk){
	if( plonk.parentNode.className == "post_header") {
		plonk.parentNode.style.display = 'none';
	}
});