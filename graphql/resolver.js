module.exports = {
  Query: {
    cmvideo: (_, args) => {
      const { id } = args
      return {
        id: id,
        callToActionCustomText: `callToActionCustomText for id: ${id}`,
        data: `data FOR ID: ${id}`,
        mimeType: "mimeType",
        alt: `alt FOR ID: ${id}`,
      };
    }
  }
};
