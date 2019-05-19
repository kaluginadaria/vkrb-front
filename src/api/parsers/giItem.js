export default (data) => {
  return {
    id: data['id'], //: 1,
    acronym: data['acronym'], //: "we"
    description: data['description'], //: "fghsdfbwffw",
    isFav: data['is_fav'], //: true
    link: data['link'], //: "http://qwerty.ru"
    photoUrl: data['photo'] ? data['photo']['url'] : null, //: {url: "/media/img/large-files-to-test.jpg", id: 1}
    title: data['title'], //: "kek"
  };
}