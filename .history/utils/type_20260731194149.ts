export interface IProject {
  _id: string;
  _type: "project";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;

  name: string;

  slug: {
    _type: "slug";
    current: string;
  };

  publishedAt: string;

  location: {
    locationen: string;
    locationfr: string;
  };

  projecttype: {
    typeen: string;
    typefr: string;
  };

  mainimage: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
  };

  intro: {
    introen: string;
    introfr: string;
  };

  brief: {
    briefen: string;
    brieffr: string;
  };

  rooms: {
    _key: string;
    roomen: string;
    roomfr: string;
  }[];

  features: {
    _key: string;
    featureen: string;
    featurefr: string;
  }[];

  units: {
    _key: string;
    unitsen: string;
    unitsfr: string;
  }[];

  floors?: string;

  clienttype: IClientType;

  status: {
    statusen: string;
    statusfr: string;
  };

  services: IService[];

  area: number;

  year: {
    _key: string;
    yearen: string;
    yearfr: string;
  }[];

  technical: {
    technicalen: string;
    technicalfr: string;
  };

  gallery: IGalleryItem[];
}

export interface Gallery {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  aspectRatio: string;
}

export interface IService {
  _id: string;
  _type: "service";

  nameen: string;
  namefr: string;

  slug: {
    _type: "slug";
    current: string;
  };
}

export interface IClientType {
  _id: string;
  _type: "clienttype";

  nameen: string;
  namefr: string;

  slug: {
    _type: "slug";
    current: string;
  };
}

export type IGalleryItem = IProjectImage | IProjectVideo;

export interface IProjectImage {
  _key: string;
  _type: "image";

  asset: {
    _ref: string;
    _type: "reference";
  };

  caption?: string;
  aspectRatio?: string;
}

export interface IProjectVideo {
  _key: string;
  _type: "file";

  asset: {
    _ref: string;
    _type: "reference";
  };
  url: string;
  caption?: string;
  aspectRatio?: string;
}
