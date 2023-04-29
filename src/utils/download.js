export default function download({
  url,
  title = '',
  target = '_blank'
}) {
  let tagA = document.createElement('a');
  tagA.setAttribute('href', url);
  tagA.setAttribute('download', title);
  tagA.setAttribute('target', target);
  document.body.appendChild(tagA);
  tagA.click();
  document.body.replaceChild(tagA)
}