import md5 from 'js-md5'
onmessage = function (event) {
  postMessage(`worker received:${md5(event.data)}`);
};
