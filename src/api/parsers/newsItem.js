export default (data) => {
  return {
    id: data['id'],
    title: data['title'],
    creationDateWMS: data['created'] * 1000,
    text: data['text'],
    mainPhoto: data['main_photo']['url'],
    keyWords: data['keywords'],
  }
};