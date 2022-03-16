

export const config = {
  appFullname: "EVATAuthSytem",
  persol_logo: "logo/placeholder.png",
  persol_logo_white: "logo/placeholder.png",
  defaultUserImage: "avatars/default_user.png",
  default_logo: "logo/placeholder.png",
  langLogo: { en: "logo/english.png", fr: "logo/french.png" },
  langs: { "en-US": "en", "fr-FR": "fr", fr: "fr", en: "en" },
  key: { lan: "language", sideBarShow: "sidebarShow" },
};

// /**
//  * Get data like labels, codes, translation etc, that for every generic page.
//  * @param {*} genericPage
//  * @param {*} language
//  * @returns
//  */
// export const GetParamData = (genericPage, language) => {
//     return data?.GenericPagesData?.[genericPage]?.[language] ? data?.GenericPagesData?.[genericPage]?.[language] : data?.GenericPagesData?.fallback
// }

// /**
//  * Get label translation using label name and language.
//  * @param {*} name
//  * @param {*} language
//  * @returns translated word
//  */

// export const GetLabelByName = (name, language) => {
//     return labels?.[name]?.[language] ? labels?.[name]?.[language] : name;
//}
