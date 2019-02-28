// import atest from './b.json'
// import atest from './c.json'
import atest from './d.json'

class Photo {
    public id: number;
    public tags: string[];
    public direction: "H" | "V";
    public taken: Boolean;

    constructor(id, tags, direction, taken) {
        this.id = id;
        this.tags = tags;
        this.direction = direction;
        this.taken = taken;
    }
}

class Slide {
    public photos: Photo[];
    public tags: string[];

    constructor(photos, tags) {
        this.photos = photos;
        this.tags = tags;
    }
}

interface S {
    _numberOfCommonTags: number, id1: Photo, id2: Photo
}

const solve = (numOfPhotos: number, photosString: string) => {
    const { verticalPhotos, slides } = bringMeThings(photosString);

    // TODO taken
    const commonTags: S[] = []
    verticalPhotos.forEach(vp1 => {
        if (!vp1.taken) {
            let min = Number.MAX_SAFE_INTEGER;
            let photo: Photo = vp1;
            verticalPhotos.forEach(vp2 => {
                if (!vp2.taken) {
                    photo = vp2;
                    const _numberOfCommonTags: number = numberOfCommonTags(vp1.tags, vp2.tags);
                    if (_numberOfCommonTags < min) {
                        min = _numberOfCommonTags;
                        photo = vp2
                    }
                }
            });
            if (photo.id !== vp1.id) {
                photo.taken = true;
                const unitedTags = new Set([...vp1.tags, ...photo.tags]);
                slides.push(new Slide([vp1, photo], Array.from(unitedTags)));
            }
        }
    });
    let out: string = slides.length + "\n";
    slides.forEach(slide => out += slide.photos.map(photo => photo.id).join(" ") + "\n")

    console.log(out)
    // console.log(sortedCommon)
    // TODO taken
    // const commonTags: S[] = []
    // verticalPhotos.forEach(vp1 => {
    //     verticalPhotos.forEach(vp2 => {
    //         const _numberOfCommonTags = numberOfCommonTags(vp1.tags, vp2.tags);
    //         commonTags.push({
    //             _numberOfCommonTags,
    //             id1: vp1,
    //             id2: vp2
    //         })
    //     });
    // });

    // const sortedCommon = commonTags.sort((a,b)=>a._numberOfCommonTags - b._numberOfCommonTags)

    // console.log(sortedCommon)

}

const numberOfCommonTags = (tags1: string[], tags2: string[]): number => {
    let numberOfCommon = 0;
    tags1.forEach(tag1 => {
        if (tags2.includes(tag1)) {
            numberOfCommon++
        }
    })
    return numberOfCommon;
}

export const HashCode = () => {

    const [numOfPhotos, photosString] = atest.in.split("|");
    solve(Number(numOfPhotos), photosString);

    return null;
}
function bringMeThings(photosString: string) {
    const photos = photosString.split(",");
    const slides: Slide[] = [];
    const verticalPhotos: Photo[] = [];
    photos.forEach((photo, i) => {
        const [direction, numbOfTags, ...tags] = photo.split(" ");
        const currentPhoto = new Photo(i, tags, direction, false);
        if (currentPhoto.direction === "H") {
            const currentSlide = new Slide([currentPhoto], Array.from(new Set(currentPhoto.tags)));
            slides.push(currentSlide);
        }
        else {
            verticalPhotos.push(currentPhoto);
        }
    });
    return { verticalPhotos, slides };
}

