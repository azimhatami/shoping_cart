function shortenText(title) {
  const newText = title.split(' ').slice(0, 3).join(' ');
  return newText;
}


export { shortenText }
