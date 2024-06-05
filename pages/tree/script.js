FamilyTree.templates.myTemplate = Object.assign({}, FamilyTree.templates.hugo);
FamilyTree.templates.myTemplate.size = [140, 180];
FamilyTree.templates.myTemplate.node = '<rect x="0" y="0" width="140" height="180"  fill="#044B94" fill-opacity="0" stroke="none"></rect>' +
    '<circle cx="70" cy="60" r="60" fill="#4D4D4D"></circle>' +
    '<circle cx="70" cy="-25" r="8" fill="white" stroke-width="1" stroke="#ED9422"></circle>' +
    '<circle cx="70" cy="-25" r="3.5" fill="#ED9422"></circle>' +
    '<circle cx="70" cy="60" fill="#ffffff" r="40"></circle>' +
    '<circle stroke="#D7DBDD" stroke-width="3" fill="#D7DBDD" cx="70" cy="40" r="13"></circle>' +
    '<path d="M40,83 C40,49 100,49 100,83" stroke="#D7DBDD" stroke-width="3" fill="#D7DBDD"></path>';

FamilyTree.templates.myTemplate.ripple = {
    radius: 60,
    color: "#775E3B",
    rect: { x: 10, y: 0, width: 120, height: 120 }
};

FamilyTree.templates.myTemplate.img_0 =
    '<clipPath id="ulaImg">'
    + '<circle cx="70" cy="60" r="40"></circle>'
    + '</clipPath>'
    + '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="30" y="20" width="80" height="80">'
    + '</image>';

FamilyTree.templates.myTemplate.field_0 = '<text style="font-size: 16px;" fill="#ED9422" x="70" y="150" text-anchor="middle">{val}</text>';
FamilyTree.templates.myTemplate.field_1 = '<text style="font-size: 10px;" fill="grey" x="70" y="170" text-anchor="middle">{val}</text>';

FamilyTree.templates.myTemplate.link =
    '<path stroke-linejoin="round" stroke="#ED9422" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';

FamilyTree.templates.myTemplate.plus = '';
FamilyTree.templates.myTemplate.minus = '';

FamilyTree.templates.myTemplate_male = Object.assign({}, FamilyTree.templates.myTemplate);
FamilyTree.templates.myTemplate_female = Object.assign({}, FamilyTree.templates.myTemplate);

var family = new FamilyTree(document.getElementById('tree'), {
    mouseScrool: FamilyTree.none,
    mode: 'dark',
    template: 'myTemplate',
    roots: [3],
    nodeMenu: {
        edit: { text: 'Edit' },
        details: { text: 'Details' },
    },
    nodeTreeMenu: true,
    nodeBinding: {
        field_0: 'name',
        field_1: 'born',
        img_0: 'photo'
    },
    tags: {
        myTemplate_male: {
            template: 'myTemplate_male'
        },
        myTemplate_female: {
            template: 'myTemplate_female'
        }
    }
});

family.load(
    [
        { id: 1, pids: [3], gender: 'male', photo: 'https://cdn.balkan.app/shared/m60/2.jpg', name: 'Zeph Daniels', born: '1954-09-29', tags: ['myTemplate_male'] },
        { id: 2, pids: [3], gender: 'male', photo: 'https://cdn.balkan.app/shared/m60/1.jpg', name: 'Rowan Annable', born: '1952-10-10', tags: ['myTemplate_male'] },
        { id: 3, pids: [1, 2], gender: 'female', photo: 'https://cdn.balkan.app/shared/w60/1.jpg', name: 'Laura Shepherd', born: '1943-01-13', email: 'laura.shepherd@gmail.com', phone: '+44 845 5752 547', city: 'Moscow', country: 'ru', tags: ['myTemplate_female'] },
        { id: 4, pids: [5], photo: 'https://cdn.balkan.app/shared/m60/3.jpg', name: 'Rowan Annable', tags: ['myTemplate_male'] },
        { id: 5, pids: [4], gender: 'female', photo: 'https://cdn.balkan.app/shared/w60/3.jpg', name: 'Lois Sowle', tags: ['myTemplate_female'] },
        { id: 6, mid: 2, fid: 3, pids: [7], gender: 'female', photo: 'https://cdn.balkan.app/shared/w30/1.jpg', name: 'Tyler Heath', born: '1975-11-12', tags: ['myTemplate_female'] },
        { id: 7, pids: [6], mid: 5, fid: 4, gender: 'male', photo: 'https://cdn.balkan.app/shared/m30/3.jpg', name: 'Samson Stokes', born: '1986-10-01', tags: ['myTemplate_male'] },
        { id: 8, mid: 7, fid: 6, gender: 'female', photo: 'https://cdn.balkan.app/shared/w10/3.jpg', name: 'Celeste Castillo', born: '2021-02-01', tags: ['myTemplate_female'] }
    ]
);