// ==========================================
// Archivum
// Application Script
// ==========================================


// ==========================================
// Data
// ==========================================

let projects =
    JSON.parse(
        localStorage.getItem(
            "archivumProjects"
        )
    ) || [

        {
    title: "メイン創作",

    subtitle:
        "Every world deserves an archive.",

    description:
        "この作品の概要がここに表示されます。",

    characters: [],

    notes: [],

    world: [],

    glossary: [],

    activity: [],

    timeline: [],

    assets: [],

    updatedAt:
    new Date().toISOString()
},

        {
    title: "Astaroth",

    subtitle:
        "星の記録",

    description:
        "星を失った世界の物語",

    characters: [],

    notes: [],

    world: [],

    glossary: [],

    activity: [],

    timeline: [],

    assets: []
}
    ];

projects.forEach(
    project => {

        if(!project.updatedAt){

            project.updatedAt =
                new Date().toISOString();

        }

    }
);

projects.forEach(
    project => {

        project.characters ??= [];

        project.notes ??= [];

        project.world ??= [];

        project.glossary ??= [];

        project.timeline ??= [];

        project.assets ??= [];

        project.activity ??= [];

    }
);

let currentProject =
    Number(
        localStorage.getItem(
            "archivumCurrentProject"
        )
    ) || 0;

projects.forEach(
    project => {

        project.characters ??= [];

        project.notes ??= [];

        project.world ??= [];

        project.glossary ??= [];

        project.timeline ??= [];

        project.assets ??= [];

        project.activity ??= [];

    }
);

let editingProject = null;

let editingCharacter = null;

let editingNote = null;

let editingWorld = null;

let editingGlossary = null;

let editingAsset = null;

// ==========================================
// Storage
// ==========================================

function saveProjects() {

    if(
        projects[currentProject]
    ){

        projects[currentProject].updatedAt =
            new Date().toISOString();

    }


    localStorage.setItem(
        "archivumProjects",
        JSON.stringify(projects)
    );

}

function addActivity(
    message
){

    const project =
        projects[currentProject];


    if(!project){

        return;

    }


    project.activity ??= [];


    project.activity.unshift({

        id:
            Date.now(),

        message:
            message,

        date:
            new Date().toISOString()

    });


    project.activity =
        project.activity.slice(
            0,
            10
        );


    saveProjects();

    renderRecentActivity();

}

// ==========================================
// Elements
// ==========================================

const newProjectButton =
    document.getElementById(
        "new-project-button"
    );


const newProjectModal =
    document.getElementById(
        "new-project-modal"
    );


const closeModalButton =
    document.getElementById(
        "close-modal-button"
    );


const cancelProjectButton =
    document.getElementById(
        "cancel-project-button"
    );


const createProjectButton =
    document.getElementById(
        "create-project-button"
    );


const projectTitleInput =
    document.getElementById(
        "project-title-input"
    );


const projectSubtitleInput =
    document.getElementById(
        "project-subtitle-input"
    );


const projectTitle =
    document.getElementById(
        "project-title"
    );


const projectSubtitle =
    document.getElementById(
        "project-subtitle"
    );


const projectList =
    document.querySelector(
        ".project-list"
    );

const globalSearch =
    document.getElementById(
        "global-search"
    );

const globalSearchResults =
    document.getElementById(
        "global-search-results"
    );

const editProjectButton =
    document.getElementById(
        "edit-project-button"
    );

const projectDescriptionInput =
    document.getElementById(
        "project-description-input"
    );

const projectDescription =
    document.getElementById(
        "project-description"
    );

const addCharacterButton =
    document.getElementById(
        "add-character-button"
    );

const characterModal =
    document.getElementById(
        "character-modal"
    );


const characterNameInput =
    document.getElementById(
        "character-name-input"
    );


const characterProfileInput =
    document.getElementById(
        "character-profile-input"
    );


const createCharacterButton =
    document.getElementById(
        "create-character-button"
    );


const characterList =
    document.getElementById(
        "character-list"
    );


const characterCount =
    document.getElementById(
        "character-count"
    );

const addNoteButton =
    document.getElementById(
        "add-note-button"
    );


const noteModal =
    document.getElementById(
        "note-modal"
    );


const noteTitleInput =
    document.getElementById(
        "note-title-input"
    );


const noteContentInput =
    document.getElementById(
        "note-content-input"
    );


const createNoteButton =
    document.getElementById(
        "create-note-button"
    );


const noteList =
    document.getElementById(
        "note-list"
    );


const noteCount =
    document.getElementById(
        "note-count"
    );

const addWorldButton =
    document.getElementById(
        "add-world-button"
    );


const worldMenuModal =
    document.getElementById(
        "world-menu-modal"
    );


const newWorldButton =
    document.getElementById(
        "new-world-button"
    );


const templateWorldButton =
    document.getElementById(
        "template-world-button"
    );


const closeWorldMenuButton =
    document.getElementById(
        "close-world-menu-button"
    );

const worldModal =
    document.getElementById(
        "world-modal"
    );


const worldTitleInput =
    document.getElementById(
        "world-title-input"
    );


const worldCategoryInput =
    document.getElementById(
        "world-category-input"
    );


const worldContentInput =
    document.getElementById(
        "world-content-input"
    );


const createWorldButton =
    document.getElementById(
        "create-world-button"
    );


const worldList =
    document.getElementById(
        "world-list"
    );


const worldCount =
    document.getElementById(
        "world-count"
    );

const addGlossaryButton =
    document.getElementById(
        "add-glossary-button"
    );


const glossaryModal =
    document.getElementById(
        "glossary-modal"
    );


const glossaryTermInput =
    document.getElementById(
        "glossary-term-input"
    );


const glossaryReadingInput =
    document.getElementById(
        "glossary-reading-input"
    );


const glossaryCategoryInput =
    document.getElementById(
        "glossary-category-input"
    );


const glossaryContentInput =
    document.getElementById(
        "glossary-content-input"
    );


const createGlossaryButton =
    document.getElementById(
        "create-glossary-button"
    );


const glossaryList =
    document.getElementById(
        "glossary-list"
    );


const glossaryCount =
    document.getElementById(
        "glossary-count"
    );

const cancelGlossaryButton =
    document.getElementById(
        "cancel-glossary-button"
    );

const settingsButton =
    document.getElementById(
        "settings-button"
    );


const settingsModal =
    document.getElementById(
        "settings-modal"
    );


const closeSettingsButton =
    document.getElementById(
        "close-settings-button"
    );

const exportDataButton =
    document.getElementById(
        "export-data-button"
    );


const importDataButton =
    document.getElementById(
        "import-data-button"
    );


const importFileInput =
    document.getElementById(
        "import-file-input"
    );

importDataButton.addEventListener(
    "click",
    () => {

        importFileInput.click();

    }
);

const themeSelect =
    document.getElementById(
        "theme-select"
    );

const accentColorInput =
    document.getElementById("accent-color-input");

const addAssetButton =
    document.getElementById("add-asset-button");

const assetModal =
    document.getElementById("asset-modal");

const assetTitleInput =
    document.getElementById("asset-title-input");

const assetCategoryInput =
    document.getElementById("asset-category-input");

const assetUrlInput =
    document.getElementById("asset-url-input");

const assetContentInput =
    document.getElementById("asset-content-input");

const createAssetButton =
    document.getElementById("create-asset-button");

const cancelAssetButton =
    document.getElementById("cancel-asset-button");

const assetList =
    document.getElementById("asset-list");

const assetCount =
    document.getElementById("asset-count");

const projectUpdatedDate =
    document.getElementById(
        "project-updated-date"
    );

const cancelCharacterButton =
    document.getElementById(
        "cancel-character-button"
    );


const cancelNoteButton =
    document.getElementById(
        "cancel-note-button"
    );

// ==========================================
// Modal
// ==========================================

function openModal() {

    newProjectModal.classList.remove(
        "hidden"
    );

}


function closeModal() {

    newProjectModal.classList.add(
        "hidden"
    );

}

function openCharacterModal(){

    characterModal.classList.remove(
        "hidden"
    );

}

function openNoteModal(){

    noteModal.classList.remove(
        "hidden"
    );

}


function closeNoteModal(){

    noteModal.classList.add(
        "hidden"
    );

}

function openWorldMenuModal(){

    worldMenuModal.classList.remove(
        "hidden"
    );

}


function closeWorldMenuModal(){

    worldMenuModal.classList.add(
        "hidden"
    );

}

function closeCharacterModal(){

    characterModal.classList.add(
        "hidden"
    );

}

function openGlossaryModal(){

    glossaryModal.classList.remove(
        "hidden"
    );

}

function openSettingsModal(){

    settingsModal.classList.remove(
        "hidden"
    );

}

function closeSettingsModal(){

    settingsModal.classList.add(
        "hidden"
    );

}

// ==========================================
// Render Projects
// ==========================================

function searchArchivum(query){

    const searchQuery =
        query.trim().toLowerCase();


    if(!searchQuery){

        globalSearchResults.innerHTML = "";

        globalSearchResults.classList.add(
            "hidden"
        );

        return;

    }


    const results = [];


    projects.forEach(
        (project, projectIndex) => {

            // ==========================================
            // 創作
            // ==========================================

            if(
                project.title
                    .toLowerCase()
                    .includes(searchQuery)
            ){

                results.push({

                    type:
                        "創作",

                    title:
                        project.title,

                    content:
                        project.subtitle || "",

                    projectIndex:
                        projectIndex

                });

            }


            // ==========================================
            // キャラクター
            // ==========================================

            project.characters.forEach(
                character => {

                    if(
                        character.name
                            .toLowerCase()
                            .includes(searchQuery)
                        ||
                        character.profile
                            .toLowerCase()
                            .includes(searchQuery)
                    ){

                        results.push({

                            type:
                                "キャラクター",

                            title:
                                character.name,

                            content:
                                character.profile,

                            projectIndex:
                                projectIndex,

                            section:
                                "characters-section"

                        });

                    }

                }
            );


            // ==========================================
            // メモ
            // ==========================================

            project.notes.forEach(
                note => {

                    if(
                        note.title
                            .toLowerCase()
                            .includes(searchQuery)
                        ||
                        note.content
                            .toLowerCase()
                            .includes(searchQuery)
                    ){

                        results.push({

                            type:
                                "メモ",

                            title:
                                note.title,

                            content:
                                note.content,

                            projectIndex:
                                projectIndex,

                            section:
                                "notes-section"

                        });

                    }

                }
            );


            // ==========================================
            // 世界設定
            // ==========================================

            project.world.forEach(
                world => {

                    if(
                        world.title
                            .toLowerCase()
                            .includes(searchQuery)
                        ||
                        world.content
                            .toLowerCase()
                            .includes(searchQuery)
                    ){

                        results.push({

                            type:
                                "世界設定",

                            title:
                                world.title,

                            content:
                                world.content,

                            projectIndex:
                                projectIndex,

                            section:
                                "world-section"

                        });

                    }

                }
            );


            // ==========================================
            // 用語集
            // ==========================================

            project.glossary.forEach(
                glossary => {

                    if(
                        glossary.term
                            .toLowerCase()
                            .includes(searchQuery)
                        ||
                        glossary.content
                            .toLowerCase()
                            .includes(searchQuery)
                    ){

                        results.push({

                            type:
                                "用語",

                            title:
                                glossary.term,

                            content:
                                glossary.content,

                            projectIndex:
                                projectIndex,

                            section:
                                "glossary-section"

                        });

                    }

                }
            );

            // ==========================================
// 資料
// ==========================================

project.assets.forEach(
    asset => {

        if(
            asset.title
                .toLowerCase()
                .includes(searchQuery)
            ||
            asset.category
                .toLowerCase()
                .includes(searchQuery)
            ||
            asset.content
                .toLowerCase()
                .includes(searchQuery)
        ){

            results.push({

                type:
                    "資料",

                title:
                    asset.title,

                content:
                    asset.content,

                projectIndex:
                    projectIndex,

                section:
                    "assets-section"

            });

        }

    }
);

        }
    );


    globalSearchResults.innerHTML = "";


    if(results.length === 0){

        globalSearchResults.innerHTML = `

            <div class="search-no-result">

                🔍 該当する項目がありません

            </div>

        `;

    }else{

        results.forEach(
            result => {

                const item =
                    document.createElement(
                        "button"
                    );


                item.className =
                    "search-result-item";


                item.innerHTML = `

                    <span class="search-result-type">

                        ${result.type}

                    </span>

                    <strong>

                        ${result.title}

                    </strong>

                    <small>

                        ${projects[result.projectIndex].title}

                    </small>

                `;


                item.addEventListener(
                    "click",
                    () => {

                        currentProject =
                            result.projectIndex;


                        localStorage.setItem(
                            "archivumCurrentProject",
                            currentProject
                        );


                        renderProjects();

                        renderCurrentProject();

                        if (result.section) {

    const targetSection =
        document.getElementById(
            result.section
        );

    if (targetSection) {

        const content =
            targetSection.querySelector(
                ".section-content"
            );

        if (content) {

            content.style.display = "";

        }

        const header =
            targetSection.querySelector(
                ".section-header"
            );

        if (header) {

            const firstSpan =
                header.querySelector(
                    "span"
                );

            if (firstSpan) {

                firstSpan.textContent =
                    firstSpan.textContent.replace(
                        "▶",
                        "▼"
                    );

            }

        }

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}
                        
                        globalSearch.value = "";

                        globalSearchResults.innerHTML = "";

                        globalSearchResults.classList.add(
                            "hidden"
                        );

                    }
                );


                globalSearchResults.appendChild(
                    item
                );

            }
        );

    }


    globalSearchResults.classList.remove(
        "hidden"
    );


    globalSearchResults.classList.remove(
        "hidden"
    );

    }


function renderProjects() {


    const items =
        projectList.querySelectorAll(
            ".project-item"
        );


    items.forEach(
        item => item.remove()
    );



    projects.forEach(
        (project, index) => {


            const li =
                document.createElement(
                    "li"
                );


            li.className =
                "project-item";


            if(index === currentProject){

                li.classList.add(
                    "active"
                );

            }


            li.innerHTML = `

    <button
        class="project-select-button"
        type="button">

        📚 ${project.title}

    </button>

    ${
        index !== 0
        ?
        `
        <button
            class="project-delete-button"
            type="button">

            🗑

        </button>
        `
        :
        ""
    }

`;

const deleteButton =
    li.querySelector(
        ".project-delete-button"
    );


if(deleteButton){

    deleteButton.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();


            projects.splice(
                index,
                1
            );


            saveProjects();


            currentProject = 0;


            renderProjects();


            projectTitle.textContent =
                "📚 " +
                projects[0].title;


            projectSubtitle.textContent =
                projects[0].subtitle;

        }
    );

}
            
            li.addEventListener(
    "click",
    () => {

        currentProject = index;

        localStorage.setItem(
    "archivumCurrentProject",
    currentProject
);

        projectTitle.textContent =
            "📚 " + project.title;


        projectSubtitle.textContent =
    project.subtitle;


projectDescription.textContent =
    project.description ||
    "この作品の概要がここに表示されます。";


        renderProjects();

        renderCurrentProject();

        
    }
);


            projectList.insertBefore(
                li,
                projectList.lastElementChild
            );


        }
    );

}

function renderCurrentProject(){

    const project =
        projects[currentProject];


    if(!project){

        return;

    }


    projectTitle.textContent =
        "📚 " + project.title;


    projectSubtitle.textContent =
        project.subtitle;


    projectDescription.textContent =
        project.description ||
        "この作品の概要がここに表示されます。";


    projectUpdatedDate.textContent =
        project.updatedAt
            ? new Date(
                project.updatedAt
              ).toLocaleDateString(
                  "ja-JP"
              )
            : "未更新";


    renderCharacters();

    renderNotes();

    renderWorlds();

    renderGlossary();

    renderAssets();

    renderRecentActivity();

}

function renderCharacters(){

    const project =
        projects[currentProject];


    characterList.innerHTML = "";


    project.characters.forEach(
        character => {


            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "character-card";


            div.innerHTML = `

    <h3>
        ${character.name}

        <button
            class="character-edit-button">

            ✏️

        </button>


        <button
            class="character-delete-button">

            🗑

        </button>

    </h3>


    <p>
        ${character.profile}
    </p>

`;

        

            const editButton =
    div.querySelector(
        ".character-edit-button"
    );


editButton.addEventListener(
    "click",
    () => {

        editingCharacter = character;


        characterNameInput.value =
            character.name;


        characterProfileInput.value =
            character.profile;


        openCharacterModal();

    }
);

            const deleteButton =
    div.querySelector(
        ".character-delete-button"
    );


deleteButton.addEventListener(
    "click",
    () => {

        
        if(
    confirm(
        "本当に削除しますか？"
    )
){

            addActivity(
    `🗑 「${character.name}」を削除しました`
);
            
    project.characters =
        project.characters.filter(
            item =>
                item.id !== character.id
        );


    saveProjects();

    renderCharacters();

}

        saveProjects();

        renderCharacters();

    }
);


            characterList.appendChild(
                div
            );


        }
    );


    characterCount.textContent =
        project.characters.length;

}

function renderNotes(){

    const project =
        projects[currentProject];


    noteList.innerHTML = "";


    project.notes.forEach(
        note => {


            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "note-card";


            div.innerHTML = `

    <h3>

        ${note.title}

        <button
            class="note-edit-button">

            ✏️

        </button>

        <button
            class="note-delete-button">

            🗑

        </button>

    </h3>


    <p>

        ${note.content}

    </p>

`;

            const editButton =
    div.querySelector(
        ".note-edit-button"
    );


editButton.addEventListener(
    "click",
    () => {

        editingNote =
            note;


        noteTitleInput.value =
            note.title;


        noteContentInput.value =
            note.content;


        openNoteModal();

    }
);


const deleteButton =
    div.querySelector(
        ".note-delete-button"
    );


deleteButton.addEventListener(
    "click",
    () => {

        if(
            confirm(
                "このメモを削除しますか？"
            )
        ){

            addActivity(
    `🗑 「${note.title}」を削除しました`
);

project.notes =
    project.notes.filter(
        item =>
            item.id !== note.id
    );

saveProjects();

renderNotes();

        }

    }
);

            noteList.appendChild(
                div
            );


        }
    );


    noteCount.textContent =
        project.notes.length;

}

function renderWorlds(){

    const project =
        projects[currentProject];


    worldList.innerHTML = "";


    project.world.forEach(
        world => {


            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "world-card";


            div.innerHTML = `

    <h3>

        ${world.title}

        <button
            class="world-edit-button">

            ✏️

        </button>


        <button
            class="world-delete-button">

            🗑

        </button>

    </h3>


    <p>
        ${world.category}
    </p>


    <p>
        ${world.content}
    </p>

`;

            const editButton =
    div.querySelector(
        ".world-edit-button"
    );


editButton.addEventListener(
    "click",
    () => {

        editingWorld = world;


        worldTitleInput.value =
            world.title;


        worldCategoryInput.value =
            world.category;


        worldContentInput.value =
            world.content;


        worldModal.classList.remove(
            "hidden"
        );

    }
);

            const deleteButton =
    div.querySelector(
        ".world-delete-button"
    );


deleteButton.addEventListener(
    "click",
    () => {

        if(
            confirm(
                "この世界設定を削除しますか？"
            )
        ){

            addActivity(
    `🗑 「${world.title}」を削除しました`
);
            
            project.world =
                project.world.filter(
                    item =>
                        item.id !== world.id
                );


            saveProjects();

            renderWorlds();

        }

    }
);
            
            worldList.appendChild(
                div
            );

        }
    );


    worldCount.textContent =
        project.world.length;

}

function renderGlossary(){

    const project =
        projects[currentProject];


    glossaryList.innerHTML = "";


    project.glossary.forEach(
        glossary => {

            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "glossary-card";


            div.innerHTML = `

    <h3>

        ${glossary.term}


        <button
            class="glossary-edit-button">

            ✏️

        </button>


        <button
            class="glossary-delete-button">

            🗑

        </button>

    </h3>


    <p>

        読み：
        ${glossary.reading}

    </p>


    <p>

        カテゴリ：
        ${glossary.category}

    </p>


    <p>

        ${glossary.content}

    </p>

`;

            const deleteButton =
    div.querySelector(
        ".glossary-delete-button"
    );


deleteButton.addEventListener(
    "click",
    () => {

        if(
            confirm(
                "この用語を削除しますか？"
            )
        ){

            addActivity(
    `🗑 「${glossary.term}」を削除しました`
);
            
            project.glossary =
                project.glossary.filter(
                    item =>
                        item.id !== glossary.id
                );


            saveProjects();

            renderGlossary();

        }

    }
);

            const editButton =
    div.querySelector(
        ".glossary-edit-button"
    );


editButton.addEventListener(
    "click",
    () => {

        editingGlossary =
            glossary;


        glossaryTermInput.value =
            glossary.term;


        glossaryReadingInput.value =
            glossary.reading;


        glossaryCategoryInput.value =
            glossary.category;


        glossaryContentInput.value =
            glossary.content;


        glossaryModal.classList.remove(
            "hidden"
        );

    }
);
            
            glossaryList.appendChild(
                div
            );

        }
    );


    glossaryCount.textContent =
        project.glossary.length;

}

function renderAssets(){

    const project =
        projects[currentProject];


    assetList.innerHTML = "";


    project.assets.forEach(
        asset => {

            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "asset-card";


            div.innerHTML = `

    <h3>

        ${asset.title}


        <button
            class="asset-edit-button">

            ✏️

        </button>


        <button
            class="asset-delete-button">

            🗑

        </button>

    </h3>


   ${
    asset.category
        ? `
            <span class="asset-category">

                ${asset.category}

            </span>
          `
        : ""
}


    <p>

        ${asset.content}

    </p>


   

`;


            // =====================================
            // Delete
            // =====================================

            const deleteButton =
                div.querySelector(
                    ".asset-delete-button"
                );


            deleteButton.addEventListener(
                "click",
                () => {

                    if(
                        confirm(
                            "この資料を削除しますか？"
                        )
                    ){

                        addActivity(
                            `🗑 「${asset.title}」を削除しました`
                        );


                        project.assets =
                            project.assets.filter(
                                item =>
                                    item.id !== asset.id
                            );


                        saveProjects();

                        renderAssets();

                    }

                }
            );


            // =====================================
            // Edit
            // =====================================

            const editButton =
                div.querySelector(
                    ".asset-edit-button"
                );


            editButton.addEventListener(
                "click",
                () => {

                    editingAsset =
                        asset;


                    assetTitleInput.value =
                        asset.title;


                    assetCategoryInput.value =
                        asset.category;


                    assetUrlInput.value =
                        asset.url;


                    assetContentInput.value =
                        asset.content;


                    assetModal.classList.remove(
                        "hidden"
                    );

                }
            );


            assetList.appendChild(
                div
            );

        }
    );


    assetCount.textContent =
        project.assets.length;

}

function renderRecentActivity(){

    const project =
        projects[currentProject];


    const activityList =
        document.getElementById(
            "recent-activity-list"
        );


    if(!activityList){

        return;

    }


    activityList.innerHTML = "";


    if(
        !project ||
        !project.activity ||
        project.activity.length === 0
    ){

        activityList.innerHTML = `

            <p class="activity-empty">

                📭 まだ更新履歴はありません。

            </p>

        `;

        return;

    }


    project.activity.forEach(
        activity => {

            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "activity-item";


            const date =
                new Date(
                    activity.date
                );


            const formattedDate =
                date.toLocaleString(
                    "ja-JP",
                    {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit"
                    }
                );


            div.innerHTML = `

                <span class="activity-message">

                    ${activity.message}

                </span>

                <time class="activity-date">

                    ${formattedDate}

                </time>

            `;


            activityList.appendChild(
                div
            );

        }
    );

}

function createCharacter(){

    const name =
        characterNameInput.value.trim();


    const profile =
        characterProfileInput.value.trim();


    if(!name){

        alert(
            "名前を入力してください"
        );

        return;

    }


    if(editingCharacter){

        editingCharacter.name =
            name;


        editingCharacter.profile =
            profile;


        editingCharacter = null;


    }else{

        projects[currentProject]
            .characters
            .push({

                id:
                    Date.now(),

                name:name,

                profile:profile

            });

    }


    saveProjects();

    addActivity(
    `👤 「${name}」を追加しました`
);

    renderCharacters();

    renderNotes();



    characterNameInput.value = "";

    characterProfileInput.value = "";


    closeCharacterModal();

}

function createNote(){

    const title =
        noteTitleInput.value.trim();


    const content =
        noteContentInput.value.trim();


    if(!title){

        alert(
            "タイトルを入力してください"
        );

        return;

    }


   if(editingNote){

    editingNote.title =
        title;

    editingNote.content =
        content;

    addActivity(
        `✏️ 「${title}」を編集しました`
    );

    editingNote = null;


}else{

    projects[currentProject]
        .notes
        .push({

            id:
                Date.now(),

            title:
                title,

            content:
                content

        });

}


    saveProjects();

    addActivity(
    `📝 「${title}」を追加しました`
);

    renderNotes();


    noteTitleInput.value = "";

    noteContentInput.value = "";


    closeNoteModal();

}

function createWorld(){

    const title =
        worldTitleInput.value.trim();


    const category =
        worldCategoryInput.value.trim();


    const content =
        worldContentInput.value.trim();


    if(!title){

        alert(
            "タイトルを入力してください"
        );

        return;

    }


    if(editingWorld){

    editingWorld.title =
        title;

    editingWorld.category =
        category;

    editingWorld.content =
        content;

    addActivity(
        `✏️ 「${title}」を編集しました`
    );

    editingWorld = null;


}else{

    projects[currentProject]
        .world
        .push({

           updatedAt:
    new Date().toISOString(),
               
            title:
                title,

            category:
                category,

            content:
                content

        });

}


    saveProjects();

    addActivity(
    `🌎 「${title}」を追加しました`
);

    renderWorlds();


    worldTitleInput.value = "";

    worldCategoryInput.value = "";

    worldContentInput.value = "";


    worldModal.classList.add(
        "hidden"
    );

}

function createGlossary(){

    const term =
        glossaryTermInput.value.trim();


    const reading =
        glossaryReadingInput.value.trim();


    const category =
        glossaryCategoryInput.value.trim();


    const content =
        glossaryContentInput.value.trim();


    if(!term){

        alert(
            "用語名を入力してください"
        );

        return;

    }


   if(editingGlossary){

    editingGlossary.term =
        term;

    editingGlossary.reading =
        reading;

    editingGlossary.category =
        category;

    editingGlossary.content =
        content;

    addActivity(
        `✏️ 「${term}」を編集しました`
    );

    editingGlossary = null;


}else{

    projects[currentProject]
        .glossary
        .push({

            id:
                Date.now(),

            term:
                term,

            reading:
                reading,

            category:
                category,

            content:
                content

        });

}


    saveProjects();

    addActivity(
    `📚 「${term}」を追加しました`
);

    renderGlossary();


    glossaryTermInput.value = "";

    glossaryReadingInput.value = "";

    glossaryCategoryInput.value = "";

    glossaryContentInput.value = "";


    glossaryModal.classList.add(
        "hidden"
    );

}

function createAsset(){

    const title =
        assetTitleInput.value.trim();


    const category =
        assetCategoryInput.value.trim();


    const url =
        assetUrlInput.value.trim();


    const content =
        assetContentInput.value.trim();


    if(!title){

        alert(
            "資料名を入力してください"
        );

        return;

    }


    if(editingAsset){

        editingAsset.title =
            title;

        editingAsset.category =
            category;

        editingAsset.url =
            url;

        editingAsset.content =
            content;


        addActivity(
            `✏️ 「${title}」を編集しました`
        );


        editingAsset = null;


    }else{

        projects[currentProject]
            .assets
            .push({

                id:
                    Date.now(),

                title:
                    title,

                category:
                    category,

                url:
                    url,

                content:
                    content

            });


        addActivity(
            `📎 「${title}」を追加しました`
        );

    }


    saveProjects();

    renderAssets();


    assetTitleInput.value = "";

    assetCategoryInput.value = "";

    assetUrlInput.value = "";

    assetContentInput.value = "";


    assetModal.classList.add(
        "hidden"
    );

}

// ==========================================
// Create Project
// ==========================================

function createProject() {


   const title =
    projectTitleInput.value.trim();


const subtitle =
    projectSubtitleInput.value.trim();


const description =
    projectDescriptionInput.value.trim();

    

    if(!title){

        alert(
            "タイトルを入力してください"
        );

        return;

    }


    const project = {

    title: title,

    subtitle:
        subtitle ||
        "Every world deserves an archive.",

    description:
        description ||
        "この作品の概要がここに表示されます。",

    characters: [],

    notes: [],

    world: [],

    glossary: [],

    timeline: [],

    assets: []

};


    if(editingProject){

    editingProject.title =
        title;


    editingProject.subtitle =
        subtitle ||
        "Every world deserves an archive.";

        projectUpdatedDate.textContent =
    project.updatedAt
        ? new Date(
            project.updatedAt
          ).toLocaleDateString(
              "ja-JP"
          )
        : "未更新";


    editingProject.description =
        description ||
        "この作品の概要がここに表示されます。";


    editingProject = null;



}else{

    projects.push(
        project
    );

}
    
    saveProjects();
    

    renderProjects();


    projectTitle.textContent =
        "📚 " + title;


    projectSubtitle.textContent =
        project.subtitle;


    projectDescription.textContent =
    project.description;
    

    closeModal();


    projectTitleInput.value = "";

    projectSubtitleInput.value = "";

}

function editProject(){

    const project =
        projects[currentProject];


    projectTitleInput.value =
        project.title;


    projectSubtitleInput.value =
        project.subtitle;


    editingProject = project;


    projectDescriptionInput.value =
    project.description;

    
    openModal();

}

function exportData(){

    const data =
        JSON.stringify(
            projects,
            null,
            2
        );


    const blob =
        new Blob(
            [data],
            {
                type:
                    "application/json"
            }
        );


    const url =
        URL.createObjectURL(
            blob
        );


    const link =
        document.createElement(
            "a"
        );


    link.href = url;

    link.download =
        "archivum-backup.json";


    link.click();


    URL.revokeObjectURL(
        url
    );

}

function importData(event){

    const file =
        event.target.files[0];


    if(!file){

        return;

    }


    const reader =
        new FileReader();


    reader.onload =
        (event) => {

            try{

                const data =
                    JSON.parse(
                        event.target.result
                    );


                if(
                    !Array.isArray(data)
                ){

                    alert(
                        "正しいArchivumのデータではありません。"
                    );

                    return;

                }


              projects =
    data;

projects.forEach(
    project => {

        project.characters ??= [];

        project.notes ??= [];

        project.world ??= [];

        project.glossary ??= [];

        project.timeline ??= [];

        project.assets ??= [];

        project.activity ??= [];
        
    }
);


saveProjects();


const savedProjectIndex =
    Number(
        localStorage.getItem(
            "archivumCurrentProject"
        )
    );


if(
    savedProjectIndex >= 0 &&
    savedProjectIndex < projects.length
){

    currentProject =
        savedProjectIndex;

}else{

    currentProject = 0;

}


localStorage.setItem(
    "archivumCurrentProject",
    currentProject
);


localStorage.setItem(
    "archivumCurrentProject",
    currentProject
);


renderProjects();

renderCurrentProject();


alert(
    "データを読み込みました！"
);

            }catch(error){

                alert(
                    "データの読み込みに失敗しました。"
                );

            }

        };


    reader.readAsText(
        file
    );

}

// ==========================================
// Events
// ==========================================

newProjectButton.addEventListener(
    "click",
    openModal
);


closeModalButton.addEventListener(
    "click",
    closeModal
);


cancelProjectButton.addEventListener(
    "click",
    closeModal
);


createProjectButton.addEventListener(
    "click",
    createProject
);


addCharacterButton.addEventListener(
    "click",
    () => {

        editingCharacter = null;

        characterNameInput.value = "";

        characterProfileInput.value = "";

        openCharacterModal();

    }
);


createCharacterButton.addEventListener(
    "click",
    createCharacter
);

addNoteButton.addEventListener(
    "click",
    () => {

        editingNote = null;

        noteTitleInput.value = "";

        noteContentInput.value = "";

        openNoteModal();

    }
);


createNoteButton.addEventListener(
    "click",
    createNote
);

addWorldButton.addEventListener(
    "click",
    openWorldMenuModal
);


closeWorldMenuButton.addEventListener(
    "click",
    closeWorldMenuModal
);


templateWorldButton.addEventListener(
    "click",
    () => {

        alert(
            "🚧 テンプレート機能は現在開発中です！\n\nβ1.5で実装予定です。"
        );

    }
);

newWorldButton.addEventListener(
    "click",
    () => {

        closeWorldMenuModal();

        worldTitleInput.value = "";

        worldCategoryInput.value = "";

        worldContentInput.value = "";

        editingWorld = null;

        worldModal.classList.remove(
            "hidden"
        );

    }
);

createWorldButton.addEventListener(
    "click",
    createWorld
);

addGlossaryButton.addEventListener(
    "click",
    () => {

        glossaryTermInput.value = "";

        glossaryReadingInput.value = "";

        glossaryCategoryInput.value = "";

        glossaryContentInput.value = "";

        openGlossaryModal();

    }
);

addAssetButton.addEventListener(
    "click",
    () => {

        assetTitleInput.value = "";

        assetCategoryInput.value = "";

        assetUrlInput.value = "";

        assetContentInput.value = "";

        assetModal.classList.remove("hidden");

    }
);

createGlossaryButton.addEventListener(
    "click",
    createGlossary
);

createAssetButton.addEventListener(
    "click",
    createAsset
);

cancelGlossaryButton.addEventListener(
    "click",
    () => {

        glossaryModal.classList.add(
            "hidden"
        );

    }
);

settingsButton.addEventListener(
    "click",
    openSettingsModal
);


closeSettingsButton.addEventListener(
    "click",
    closeSettingsModal
);

exportDataButton.addEventListener(
    "click",
    exportData
);

importFileInput.addEventListener(
    "change",
    importData
);

themeSelect.addEventListener(
    "change",
    () => {

        const theme =
            themeSelect.value;


        document.body.classList.remove(
            "dark-theme",
            "pastel-blue-theme"
        );


        if(theme === "dark"){

            document.body.classList.add(
                "dark-theme"
            );

        }


        if(theme === "pastel-blue"){

            document.body.classList.add(
                "pastel-blue-theme"
            );

        }


        localStorage.setItem(
            "archivumTheme",
            theme
        );

    }
);

accentColorInput.addEventListener(
    "input",
    () => {

        const color =
            accentColorInput.value;


        localStorage.setItem(
            "archivumAccentColor",
            color
        );


        document.documentElement.style.setProperty(
            "--accent",
            color
        );

    }
);

globalSearch.addEventListener(
    "input",
    () => {

        searchArchivum(
            globalSearch.value
        );

    }
);

    cancelCharacterButton.addEventListener(
    "click",
    () => {

        characterModal.classList.add(
            "hidden"
        );

    }
);


cancelNoteButton.addEventListener(
    "click",
    () => {

        noteModal.classList.add(
            "hidden"
        );

    }
);


cancelAssetButton.addEventListener(
    "click",
    () => {

        assetModal.classList.add(
            "hidden"
        );

    }
);

// ==========================================
// Initialize
// ==========================================

const savedTheme =
    localStorage.getItem(
        "archivumTheme"
    ) || "default";

document.body.classList.remove(
    "dark-theme",
    "pastel-blue-theme"
);


if(savedTheme === "dark"){

    document.body.classList.add(
        "dark-theme"
    );

}


if(savedTheme === "pastel-blue"){

    document.body.classList.add(
        "pastel-blue-theme"
    );

}

const savedAccentColor =
    localStorage.getItem(
        "archivumAccentColor"
    ) || "#6FAE8D";


accentColorInput.value =
    savedAccentColor;


document.documentElement.style.setProperty(
    "--accent",
    savedAccentColor
);


themeSelect.value =
    savedTheme;

document.body.classList.remove(
    "dark-theme",
    "pastel-blue-theme"
);


if(savedTheme === "dark"){

    document.body.classList.add(
        "dark-theme"
    );

}


if(savedTheme === "pastel-blue"){

    document.body.classList.add(
        "pastel-blue-theme"
    );

}


renderProjects();

renderCurrentProject();


editProjectButton.addEventListener(
    "click",
    editProject
);

document
    .querySelectorAll(".section-header")
    .forEach(
        header => {

            header.addEventListener(
                "click",
                () => {

                    const section =
                        header.closest(
                            ".project-section"
                        );


                    const content =
                        section.querySelector(
                            ".section-content"
                        );


                    if(!content){

                        return;

                    }


                    const isOpen =
                        content.style.display !== "none";


                    if(isOpen){

                        content.style.display =
                            "none";

                        header.querySelector(
                            "span"
                        ).textContent =
                            header.querySelector(
                                "span"
                            ).textContent.replace(
                                "▼",
                                "▶"
                            );

                    }else{

                        content.style.display =
                            "";

                        header.querySelector(
                            "span"
                        ).textContent =
                            header.querySelector(
                                "span"
                            ).textContent.replace(
                                "▶",
                                "▼"
                            );

                    }

                }
            );

        }
    );