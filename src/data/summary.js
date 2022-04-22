const summaries = [
    {
        id: 1,
        title: "Introduction React",
        points: [
            {
                id: 1,
                pointTitle: "Pengertian React",
                pointDesc:
                    "ReactJS adalah sebuah library Javascript untuk membuat user interface yang cepat. React dikembangkan oleh Facebook (Sekarang Meta) dan berhasil menduduki peringkat teratas library paling banyak digunakan di dunia berdasarkan survey Stackoverflow.",
            },
            {
                id: 2,
                pointTitle: "Kelebihan React",
                pointDesc: [
                    { id: 1, subPointTitle: "Deklaratif", subPointDesc: "React membuat proses pengembangan website menjadi mudah dan cepat" },
                    {
                        id: 2,
                        subPointTitle: "Berbasis Komponen",
                        subPointDesc:
                            "React berbasis komponen. Artinya seluruh aplikasi yang dibangun React sebenarnya adalah gabungan dari beberapa komponen yang sudah dicrafting sedemikian rupa. Di setiap komponen terdapat statenya masing-masing. Dan ketika statenya itu berubah, React tidak akan merender seluruh halaman dan hanya akan merender komponen yang berubah saja.",
                    },
                    {
                        id: 3,
                        subPointTitle: "Belajar sekali tulis dimana saja",
                        subPointDesc:
                            "React adalah sebuah library yang memanfaatkan JavaScript dalam penggunaannya. Pemahaman JavaScript amat sangat diperlukan untuk menggunakan React. Artinya jika kita sudah paham akan konsep-konsep JavaScript, kita sudah siap untuk mengeksplorasi library yang satu ini. Dan kita sudah selangkah lebih maju karena kita bisa memanfaatkan React untuk membangun aplikasi mobile dengan menggunakan React Native.",
                    },
                    {
                        id: 4,
                        subPointTitle: "Banyak digunakan oleh perusahaan besar",
                        subPointDesc:
                            "React menjadi sangat populer dan banyak yang berbondong-bondong untuk mempelajri libraty ini. React masih mempertahankan posisi pertama sebagai teknologi paling populer berdasarkan survet Stackoverflow",
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        title: "React Fundamental",
        points: [
            {
                id: 1,
                pointTitle: "JSX",
                pointDesc:
                    "JSX adalah extension JavaScript yang memungkinkan kita untuk menulis syntax HTML di kode JavaScript. Dalam penggunaannya JSX akan dicompile oleh compiler Babel.",
            },
            {
                id: 2,
                pointTitle: "React Component",
                pointDesc:
                    "Konsep dari React adalah ia dibuat berdasarkan komponen. Komponen-komponen dibagi menjadi beberapa komponen child, lalu disusun sedemikian rupa sehingga menghasilkan komponen yang lebih kompleks.",
            },
            {
                id: 3,
                pointTitle: "Props",
                pointDesc:
                    "Props singkatan dari property. Gunanya untuk mengirimkan data antar komponen. Props dioper ke komponen lain sama dengan memberikan atribut pada tag HTML. Props pada komponen adalah read only atau tidak dapat diubah.",
            },
        ],
    },
    {
        id: 3,
        title: "React Routing",
        points: [
            {
                id: 1,
                pointTitle: "Pengertian Routing",
                pointDesc:
                    "Routing adalah proses navigasi di sebuah app ataupun website. Di React, kita bisa melakukan routing dengan menginstall library yang bernama React Router. Library ini memungkinkan kita untuk membuat sebuah web app berbasis SPA atau Single Page Application.",
            },
            {
                id: 2,
                pointTitle: "Single Page Application VS Multi Page Application",
                pointDesc:
                    "Single Page Application adalah salah satu jenis web app yang konsepnya hanya terdapat 1 halaman tapi kita bisa memilih apa saja yang ingin ditampilkan jika mengarah pada path tertentu. Sedangkan Multi Page Application adalah jenis website dimana kita harus memuat ulang seluruh halaman yang ada ketika kita ingin menampilkan halaman tersebut.",
            },
        ],
    },
    {
        id: 4,
        title: "Event Handling",
        points: [
            {
                id: 1,
                pointTitle: "Pengertian State",
                pointDesc: "State adalah jenis data pada React yang khusus untuk sebuah komponen tertentu. Berbeda dengan props, state datanya dapat diubah.",
            },
            {
                id: 2,
                pointTitle: "Statefull dan Stateless Component",
                pointDesc:
                    "Di React, terdapat 2 cara pembuatan komponen, yaitu menggunakan functional component dan class component. Perbedaannya terdapat pada data yang ada di dalamnya. Di functinal component, kita tidak dapat membuat state di komponennya, sedangakan di class component, kita bisa menambahkan state. Karena behavior ini, functional component disebut dengan stateless component dan class component disebut statefull component.",
            },
            {
                id: 3,
                pointTitle: "Event Handling",
                pointDesc:
                    "Event Handling adalah suatu metode untuk menangani suatu aksi (event) yang diberikan pengguna di suatu komponen. Event tersebut akan bekerja jika terdapat trigger tertentu dari pengguna seperti ketika tombol di klik atau onclick, atau ketika halaman di scroll atau onscroll. Berbeda dengan HTML, penulisan event handling pada React harus ditulis dengan camelCase, dari yang mulanya onclick menjadi onClick",
            },
        ],
    },
    {
        id: 5,
        title: "React Hooks",
        points: [
            {
                id: 1,
                pointTitle: "Pengertian Hooks",
                pointDesc:
                    "React hooks merupakan fitur baru pada React yang mulai dikembangkan sejak React versi 16.8. Hooks pada dasarnya adalah function yang disediakan oleh React untuk memudahkan para developer untuk menggunakan fitur-fitur yang ada pada React. React hooks yang telah disediakan oleh React antara lain useState, useEffect, useContext, useRef dan useMemo.",
            },
            {
                id: 2,
                pointTitle: "useState",
                pointDesc: "useState adalah sebuah hooks yang disediakan React, yang memungkinkan kita untuk menggunakan state pada functional component.",
            },
            {
                id: 3,
                pointTitle: "useEffect",
                pointDesc:
                    "useEffect adalah hooks yang memungkinkan kita menerapkan penggunaan lifecycle method yang sebelumnya hanya ada pada class component, menjadi bisa digunakan di functional component",
            },
        ],
    },
    {
        id: 6,
        title: "React Form",
        points: [
            {
                id: 1,
                pointTitle: "Pengertian Form",
                pointDesc:
                    "Form merupakan hal yang sangat penting dalam sebuah aplikasi atau website. Dengan adanya form, kita bisa mengambil inputan dari user untuk kemudian diolah.",
            },
            {
                id: 2,
                pointTitle: "Validasi Form",
                pointDesc:
                    "Validasi form adalah suatu cara supaya user memasukkan form sesuai dengan apa yang kita harapkan. Apabila user memasukkan form yang tidak sesuai dengan keinginan kita, akan muncul pesan error untuk memberitahu user bahwa inputan seperti itu tidak diperkenankan.",
            },
        ],
    },
    {
        id: 7,
        title: "Global State Management",
        points: [
            {
                id: 1,
                pointTitle: "Konsep Global State Management",
                pointDesc:
                    "Konsep dari global state adalah kita menyimpan sebuah state di sebuah store yang mana state tersebut bisa digunakan di komponen mmanapun dengan lebih mudah dan tentunya menjaga kode tetap terbaca. Di React, kita bisa menggunaakan library yang bernama Redux untuk melakukan hal tersebut.",
            },
            {
                id: 2,
                pointTitle: "Redux",
                pointDesc: [
                    {
                        id: 1,
                        subPointTitle: "Reducer",
                        subPointDesc:
                            "Reducer adalah tempat kita menyimpan sebuah state. Reducer adalah sebuah function yang di dalamnya terdapat state yang kita simpan beserta dengan action apa yang ingin kita lakukan.",
                    },
                    {
                        id: 2,
                        subPointTitle: "Store",
                        subPointDesc:
                            "Store adalah tempat dimana kita mengconnect reducer kita dengan component. Store digunakan untuk menyimpan reducer. Dalam web app hanya terdapat satu store, dan satu store tersebut bisa menampung banyak reducer.",
                    },
                    {
                        id: 3,
                        subPointTitle: "Dispatch",
                        subPointDesc:
                            "Dispatch adalah sebuah trigger yang ingin kita sampaikan ke reducer supaya reducer tersebut bisa mengolah statenya berdasarkan action yang dikirim.",
                    },
                    {
                        id: 4,
                        subPointTitle: "Action",
                        subPointDesc:
                            "Action adalah sebuah parameter yang berisi aksi apa yang ingin dilakukan terhadap reducer. Action dikirim melalui dispatch.",
                    },
                ],
            },
            {
                id: 3,
                pointTitle: "Data Fetching",
                pointDesc: "Data fetching adalah sebuah konsep untuk mengambil data yang ada pada API.",
            },
        ],
    },
    {
        id: 8,
        title: "Testing",
        points: [
            {
                id: 1,
                pointTitle: "Pengertian Testing",
                pointDesc:
                    "Testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di code kita.",
            },
            {
                id: 2,
                pointTitle: "Manfaat Testing",
                pointDesc: [
                    {
                        id: 1,
                        subPointTitle: "",
                        subPointDesc:
                            "1. Ketika aplikasi kita mempunyai coverage yang baik (mayoritas codebase tercover oleh test), kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi tersebut. Dan jika ada bagian lain yang broken, kita akan segera mengetahuinya.",
                    },
                    {
                        id: 2,
                        subPointTitle: "",
                        subPointDesc:
                            "2. Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.",
                    },
                ],
            },
            {
                id: 3,
                pointTitle: "Kategori Testing",
                pointDesc: [
                    {
                        id: 1,
                        subPointTitle: "Rendering Component Tree",
                        subPointDesc: "Testing ini dilakukan di dalam environment test yang sudah disederhanakan dan ditegaskan pada keluarannya.",
                    },
                    {
                        id: 2,
                        subPointTitle: "End to End",
                        subPointDesc: "Menjalankan aplikasi secara keseluruhan, dilakukan di dalam web browser.",
                    },
                ],
            },
        ],
    },
    {
        id: 9,
        title: "Deployment",
        points: [
            {
                id: 1,
                pointTitle: "Pengertian Deployment",
                pointDesc:
                    "Deployment adalah kegiatan mempublish projek web kita ke dalam sebuah layanan hosting. Deployment memiliki tujuan agar web yang sudah kita buat bisa diakses oleh orang banyak, tidak hanya oleh kita sendiri.",
            },
            {
                id: 2,
                pointTitle: "Build React App",
                pointDesc:
                    "Sebelum kita mendeploy web kita, kita harus membuild projek web kita. Tujuan dari build ini adalah untuk membuat versi production dari projek kita, sehingga performanya lebih ringan dan cepat. Di create react app, build dapat dilakukan dengan mengetikkan perintah npm run build pada terminal.",
            },
            {
                id: 3,
                pointTitle: "Layanan Hosting",
                pointDesc: [
                    {
                        id: 1,
                        subPointTitle: "Surge",
                        subPointDesc:
                            "Surge adalah layanan penerbit website statik gratis untuk Front End Developer. Website statik yang diposting akan memiliki subdomain .surge.sh. Surge dapat menerima file HTML, CSS dan JS.",
                    },
                    {
                        id: 2,
                        subPointTitle: "Netlify",
                        subPointDesc:
                            "Netlify adalah salah satu platform penyedia layanan build tools sekaligus continous development. Netlify memungkinkan kita untuk website statis secara gratis. Netlify juga sudah terintegrasi dengan git host populer seperti github, gitlab dan bitbucket.",
                    },
                ],
            },
        ],
    },
];

export default summaries;
