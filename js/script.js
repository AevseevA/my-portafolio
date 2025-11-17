/* ==========================================
   LANGUAGE SYSTEM
   ========================================== */
let currentLang = 'en'; // Current language (English or Spanish)

// Language translations for categories
const translations = {
    en: {
        categories: {
            documentary: 'Documentary',
            ad: 'Ad',
            promo: 'Promo',
            short: 'Short Film'
        }
    },
    es: {
        categories: {
            documentary: 'Documental',
            ad: 'Spot',
            promo: 'Promo',
            short: 'Cortometraje'
        }
    }
};

/* ==========================================
   YOUR PROJECTS DATABASE
   
   HOW TO ADD A NEW VIDEO:
   1. Export your video as MP4
   2. Create a thumbnail PNG (1920x1080)
   3. Place them in the correct category folder:
      - videos/promos/your-video.mp4
      - images/promos/thumb-your-video.png
   4. Copy the template below and fill in your details
   
   TEMPLATE TO COPY:
   { 
       title: 'Your Project Title (English)', 
       titleEs: 'Tu Título del Proyecto (Español)', 
       category: 'promo',  // Options: 'promo', 'documentary', 'ad', 'short'
       icon: '🎬',  // Emoji that shows if thumbnail doesn't load
       videoFile: 'videos/promos/your-video-name.mp4',
       thumbnail: 'images/promos/thumb-your-video-name.png'
   },
   ========================================== */

const projects = {
    // ===== PROMOS =====
    promos: {
        axn: [
            {
                title: 'AXN Promo',
                titleEs: 'Promo AXN',
                category: 'promo',
                brand: 'axn',
                icon: '🎬',
                thumbnail: 'images/promos/AXN/thumb-Promo_AXN_ .png',
                versions: [
                    { duration: '45s', file: 'Videos/promos/AXN/AXN Promo/Promo_AXN_45s .mp4' },
                    { duration: '40s', file: 'Videos/promos/AXN/AXN Promo/Promo_AXN_40s .mp4' },
                    { duration: '30s', file: 'Videos/promos/AXN/AXN Promo/Promo_AXN_30s .mp4' },
                    { duration: '20s', file: 'Videos/promos/AXN/AXN Promo/Promo_AXN_20s .mp4' },
                    { duration: '15s', file: 'Videos/promos/AXN/AXN Promo/Promo_AXN_15s .mp4' }
                ]
            },
            {
                title: 'AXN Movies',
                titleEs: 'AXN Películas',
                category: 'promo',
                brand: 'axn',
                icon: '🎬',
                thumbnail: 'images/promos/AXN/thumb-A_CINE_GNST_OCT21_.png',
                versions: [
                    { duration: '30s', file: 'Videos/promos/AXN/AXN Movies/A_CINE_GNST_OCT21_30s.mp4' },
                    { duration: '20s', file: 'Videos/promos/AXN/AXN Movies/A_CINE_GNST_OCT21_20s.mp4' }
                ]
            },
            {
                title: 'AXN Cloverfield',
                titleEs: 'AXN Cloverfield',
                category: 'promo',
                brand: 'axn',
                icon: '🎬',
                thumbnail: 'images/promos/AXN/thumb-A_CINE_CAP_CLOVERFIELD_INV_.png',
                versions: [
                    { duration: '30s', file: 'Videos/promos/AXN/AXN Cloverfield/A_CINE_CAP_CLOVERFIELD_INV_30s.mp4' },
                    { duration: '15s', file: 'Videos/promos/AXN/AXN Cloverfield/A_CINE_CAP_CLOVERFIELD_INV_15s.mp4' }
                ]
            },
            {
                title: 'AXN Evergreen',
                titleEs: 'AXN Evergreen',
                category: 'promo',
                brand: 'axn',
                icon: '🎬',
                thumbnail: 'images/promos/AXN/thumb-A_PROG_GNST_EVERGREEN_.png',
                versions: [
                    { duration: '45s', file: 'Videos/promos/AXN/AXN Evergreen/A_PROG_GNST_EVERGREEN_45s.mp4' },
                    { duration: '30s', file: 'Videos/promos/AXN/AXN Evergreen/A_PROG_GNST_EVERGREEN_30s.mp4' },
                    { duration: '25s', file: 'Videos/promos/AXN/AXN Evergreen/A_PROG_GNST_EVERGREEN_25s.mp4' },
                    { duration: '20s', file: 'Videos/promos/AXN/AXN Evergreen/A_PROG_GNST_EVERGREEN_20s.mp4' },
                    { duration: '15s', file: 'Videos/promos/AXN/AXN Evergreen/A_PROG_GNST_EVERGREEN_15s.mp4' }
                ]
            },
            {
                title: 'AXN Movies November',
                titleEs: 'AXN Películas Noviembre',
                category: 'promo',
                brand: 'axn',
                icon: '🎬',
                thumbnail: 'images/promos/AXN/thumb-A_CINE_GNST_NOV21_.png',
                versions: [
                    { duration: '30s', file: 'Videos/promos/AXN/AXN Movies 2/A_CINE_GNST_NOV21_30s.mp4' },
                    { duration: '20s', file: 'Videos/promos/AXN/AXN Movies 2/A_CINE_GNST_NOV21_20s.mp4' }
                ]
            },
            {
                title: 'AXN Saw',
                titleEs: 'AXN Saw',
                category: 'promo',
                brand: 'axn',
                icon: '🎬',
                thumbnail: 'images/promos/AXN/thumb-A_CINE_CAP_HALLOWEEN_30_ALL.png',
                versions: [
                    { duration: '30s', file: 'Videos/promos/AXN/AXN Saw/A_CINE_CAP_HALLOWEEN_30_ALL.mp4' },
                    { duration: '20s', file: 'Videos/promos/AXN/AXN Saw/A_CINE_CAP_HALLOWEEN_15_ALL.mp4' }
                ]
            },
            {
                title: 'Candice Renoir',
                titleEs: 'Candice Renoir',
                category: 'promo',
                brand: 'axn',
                icon: '📺',
                thumbnail: 'images/promos/AXN/thumb-A_CANREN4.png',
                versions: [
                    { duration: 'All Promo', file: 'Videos/promos/AXN/Canidce Renoir/All/A_CANREN4_GNST_MRTN_SAB_SEP21_ALL.mp4' },
                    { duration: 'Episode 3', file: 'Videos/promos/AXN/Canidce Renoir/Episode3/A_CANREN4_CAP_3_ALL.mp4' },
                    { duration: 'Episode 4', file: 'Videos/promos/AXN/Canidce Renoir/Episode4/A_CANREN4_CAP_4_ALL.mp4' },
                    { duration: 'Episode 5', file: 'Videos/promos/AXN/Canidce Renoir/Episode5/A_CANREN4_CAP_5_ALL.mp4' }
                ]
            },
            {
                title: 'Seal Team',
                titleEs: 'Seal Team',
                category: 'promo',
                brand: 'axn',
                icon: '📺',
                thumbnail: 'images/promos/AXN/thumb-A_SEALT.png',
                versions: [
                    { duration: '30s', file: 'Videos/promos/AXN/Seal team/A_SEALT_30s.mp4' },
                    { duration: '15s', file: 'Videos/promos/AXN/Seal team/A_SEALT_15s.mp4' }
                ]
            }
         ],
        // ===== SONY PROMOS =====    
        sony: [
            {
                title: 'Sony Promo',
                titleEs: 'Promo Sony',
                category: 'promo',
                brand: 'sony',
                icon: '📺',
                thumbnail: 'images/promos/Sony/thum-Promo_Sony.png',
                versions: [
                    { duration: '45s', file: 'Videos/promos/Sony/Sony Promo/Promo_Sony_45s.mp4' },
                    { duration: '40s', file: 'Videos/promos/Sony/Sony Promo/Promo_Sony_40s.mp4' },
                    { duration: '30s', file: 'Videos/promos/Sony/Sony Promo/Promo_Sony_30s.mp4' },
                    { duration: '20s', file: 'Videos/promos/Sony/Sony Promo/Promo_Sony_20s.mp4' },
                    { duration: '15s', file: 'Videos/promos/Sony/Sony Promo/Promo_Sony_15s.mp4' }
                ]
            },
            {
                title: 'Especial Cinturón Negro',
                titleEs: 'Especial Cinturón Negro',
                category: 'promo',
                brand: 'sony',
                icon: '🥋',
                thumbnail: 'images/promos/Sony/thumb-S_MOVS_CAP_CINTURON_NEGRO_ALL.png',
                versions: [
                    { duration: 'Full', file: 'Videos/promos/Sony/Especial Cinturon Negro/S_MOVS_CAP_CINTURON_NEGRO_ALL.mp4' }
                ]
            },
            {
                title: 'Shark Tank Colombia',
                titleEs: 'Shark Tank Colombia',
                category: 'promo',
                brand: 'sony',
                icon: '🦈',
                thumbnail: 'images/promos/Sony/thumb-S_SKTCO4.png',
                versions: [
                    { duration: 'Best Of S1E2', file: 'Videos/promos/Sony/Shark Tank COL/Best Of/S_BSTCOL1_CAP_2.mp4' },
                    { duration: 'S4 Promo 30s', file: 'Videos/promos/Sony/Shark Tank COL/Season4/S_SKTCO4_MNT_SEPOCT_30s.mp4' },
                    { duration: 'S4 Promo 15s', file: 'Videos/promos/Sony/Shark Tank COL/Season4/S_SKTCO4_MNT_SEPOCT_15s.mp4' },
                    { duration: 'Episode 9', file: 'Videos/promos/Sony/Shark Tank COL/Episode9/S_SKTCO4_CAP_9.mp4' },
                    { duration: 'Episode 10', file: 'Videos/promos/Sony/Shark Tank COL/Episode10/S_SKTCO4_CAP_10.mp4' }
                ]
            },
            {
                title: 'Shark Tank Mexico',
                titleEs: 'Shark Tank México',
                category: 'promo',
                brand: 'sony',
                icon: '🦈',
                thumbnail: 'images/promos/Sony/thumb-S_SKTMX6_MNT_AGOOCT.png',
                versions: [
                    { duration: '30s', file: 'Videos/promos/Sony/Shark Tank MX/S_SKTMX6_MNT_AGOOCT_30s_MEX.mp4' },
                    { duration: '20s', file: 'Videos/promos/Sony/Shark Tank MX/S_SKTMX6_MNT_AGOOCT_20s_MEX.mp4' },
                    { duration: '15s', file: 'Videos/promos/Sony/Shark Tank MX/S_SKTMX6_MNT_AGOOCT_15s_MEX.mp4' }
                ]
            },
            {
                title: 'Sony Movies October',
                titleEs: 'Sony Movies Octubre',
                category: 'promo',
                brand: 'sony',
                icon: '🎬',
                thumbnail: 'images/promos/Sony/thumb-S_MOVS_GNST.png',
                versions: [
                    { duration: '30s', file: 'Videos/promos/Sony/Sony Movies/S_MOVS_GNST_OCT21_30s.mp4' },
                    { duration: '15s', file: 'Videos/promos/Sony/Sony Movies/S_MOVS_GNST_OCT21_15s.mp4' }
                ]
            },
            {
                title: 'Sony Movies November',
                titleEs: 'Sony Movies Noviembre',
                category: 'promo',
                brand: 'sony',
                icon: '🎬',
                thumbnail: 'images/promos/Sony/thumb-S_MOVS_GNST_.png',
                versions: [
                    { duration: '30s', file: 'Videos/promos/Sony/Sony Movies 2/S_MOVS_GNST_NOV21_30s.mp4' },
                    { duration: '15s', file: 'Videos/promos/Sony/Sony Movies 2/S_MOVS_GNST_NOV21_15s.mp4' }
                ]
            },
            
            {
                title: 'Sony Promo 2',
                titleEs: 'Promo Sony 2',
                category: 'promo',
                brand: 'sony',
                icon: '📺',
                thumbnail: 'images/promos/Sony/thumb-Promo_Sony2.png',
                versions: [
                    { duration: '45s', file: 'Videos/promos/Sony/Sony Promo 2/Promo_Sony_45s.mp4' },
                    { duration: '40s', file: 'Videos/promos/Sony/Sony Promo 2/Promo_Sony_40s.mp4' },
                    { duration: '30s', file: 'Videos/promos/Sony/Sony Promo 2/Promo_Sony_30s.mp4' },
                    { duration: '20s', file: 'Videos/promos/Sony/Sony Promo 2/Promo_Sony_20s.mp4' },
                    { duration: '15s', file: 'Videos/promos/Sony/Sony Promo 2/Promo_Sony_15s.mp4' }
                ]
            },
            {
                title: 'Sony Venom',
                titleEs: 'Sony Venom',
                category: 'promo',
                brand: 'sony',
                icon: '🎬',
                thumbnail: 'images/promos/Sony/thumb-S_SONY MOVIES - VENOm.png',
                versions: [
                    { duration: 'Full', file: 'Videos/promos/Sony/Sony Venom/S_SONY MOVIES - VENOM.mp4' }
                ]
            },
            {
                title: 'Sony VOD',
                titleEs: 'Sony VOD',
                category: 'promo',
                brand: 'sony',
                icon: '📺',
                thumbnail: 'images/promos/Sony/thumb-S_MOVIES VOD.png',
                versions: [
                    { duration: 'Full', file: 'Videos/promos/Sony/Sony VOD/S_MOVIES VOD.mp4' }
                ]
            },
            {
                title: 'Electric Dreams',
                titleEs: 'Electric Dreams',
                category: 'promo',
                brand: 'sony',
                icon: '⚡',
                thumbnail: 'images/promos/Sony/thumb-Electric Dreams Ep4.png',
                versions: [
                    { duration: 'Episode 4', file: 'Videos/promos/Sony/Electric Dreams/Electric Dreams Ep4.mp4' }
                ]
            },
            {
                title: 'The Night Shift',
                titleEs: 'The Night Shift',
                category: 'promo',
                brand: 'sony',
                icon: '🌙',
                thumbnail: 'images/promos/Sony/thumb-S_NIGHT SHIFT.png',
                versions: [
                    { duration: '30s', file: 'Videos/promos/Sony/The Night Shift/S_NIGHT SHIFT S04 - 30.mp4' },
                    { duration: '20s', file: 'Videos/promos/Sony/The Night Shift/S_NIGHT SHIFT S04 - 20.mp4' }
                ]
            }
        ]
    },
        // ===== DOCUMENTARIES =====
        // Add your documentaries here using the template above
        // Example:
        // const documentaries = [
        //     { 
        //         title: 'Ocean Depths Documentary', 
        //         titleEs: 'Documental Profundidades Oceánicas', 
        //         category: 'documentary', 
        //         icon: '🌊',
        //         videoFile: 'videos/documentaries/ocean-depths.mp4',
        //         thumbnail: 'images/documentaries/thumb-ocean-depths.png'
        //     }
        // ];
    documentaries: [
        { 
            title: 'Street Resistance', 
            titleEs: 'Calle Resistencia', 
            category: 'documentary', 
            icon: '🌊',
            videoFile: 'Videos/documentaries/calle-resistencia.mp4',
            thumbnail: 'images/documentaries/calle-resistencia.png'
        }
    ], 

        // ===== ADS =====
    ads: [
        // ========== SAMSUNG CAMPAIGNS ==========
        
        // Samsung S20 - Food
        {
            title: 'Samsung S20 - Food Campaign',
            titleEs: 'Samsung S20 - Campaña Food',
            category: 'ad',
            brand: 'samsung',
            campaign: 'S20 Food',
            icon: '🍔',
            thumbnail: 'images/ads/Samsung/S20/Food/thumb-food.png',
            versions: [
                { duration: '45s', file: 'Videos/ads/Samsung/S20/Food/Capsula-Food_45s.mp4' },
                { duration: '15s Presentation Horiz', file: 'Videos/ads/Samsung/S20/Food/Presentation_15s Horizontal.mp4' },
                { duration: '15s Vertical', file: 'Videos/ads/Samsung/S20/Food/Capsula_Food_15s Vertical.mp4' },
                { duration: '15s Horizontal', file: 'Videos/ads/Samsung/S20/Food/Capsula_Food_15s Horizontal.mp4' },
                { duration: '5s', file: 'Videos/ads/Samsung/S20/Food/Capsula_Food_5s.mp4' }
            ]
        },
        
        // Samsung S20 - Nature
        {
            title: 'Samsung S20 - Nature Campaign',
            titleEs: 'Samsung S20 - Campaña Nature',
            category: 'ad',
            brand: 'samsung',
            campaign: 'S20 Nature',
            icon: '🌿',
            thumbnail: 'images/ads/Samsung/S20/Nature/thumb-nature.png',
            versions: [
                { duration: '50s Mobile', file: 'Videos/ads/Samsung/S20/Nature/Capsula_Nature_50s(Mobile).mp4' },
                { duration: '45s', file: 'Videos/ads/Samsung/S20/Nature/Capsula_Nature_45s-.mp4' },
                { duration: '15s Vertical', file: 'Videos/ads/Samsung/S20/Nature/Capsula_Nature_15s V_Final.mp4' },
                { duration: '15s Horizontal', file: 'Videos/ads/Samsung/S20/Nature/Capsula_Nature_15s H_Final.mp4' },
                { duration: '15s Cuadrado', file: 'Videos/ads/Samsung/S20/Nature/Capsula_Nature_15s C_FINAL.mp4' },
                { duration: '6s', file: 'Videos/ads/Samsung/S20/Nature/Capsula_Nature_6s.mp4' },
                { duration: '5s', file: 'Videos/ads/Samsung/S20/Nature/Capsula_Nature_5s_Final.mp4' }
            ]
        },
        
        // Samsung S20 - Making Off
        {
            title: 'Samsung S20 - Making Off',
            titleEs: 'Samsung S20 - Making Off',
            category: 'ad',
            brand: 'samsung',
            campaign: 'S20 Making Off',
            icon: '🎬',
            thumbnail: 'images/ads/Samsung/S20/Making_Off/thumb-making-off.png',
            versions: [
                { duration: '30s', file: 'Videos/ads/Samsung/S20/Making Off/Making Off 30s_Master Final.mp4' },
                { duration: '15s Horizontal', file: 'Videos/ads/Samsung/S20/Making Off/Making Off_15sH_Master.mp4' },
                { duration: '15s', file: 'Videos/ads/Samsung/S20/Making Off/Making Off_15s_Master.mp4' },
                { duration: '6s', file: 'Videos/ads/Samsung/S20/Making Off/Making Off_6S_Master.mp4' },
                { duration: '5s', file: 'Videos/ads/Samsung/S20/Making Off/Making Off_5s_Master.mp4' }
            ]
        },
        
        // Samsung S20 - Spot Final
        {
            title: 'Samsung S20 - Spot Final',
            titleEs: 'Samsung S20 - Spot Final',
            category: 'ad',
            brand: 'samsung',
            campaign: 'S20 Spot Final',
            icon: '⭐',
            thumbnail: 'images/ads/Samsung/S20/Spot_Final/thumb-spot-final.png',
            versions: [
                { duration: 'Master', file: 'Videos/ads/Samsung/S20/Spot Final/SPOT_FINAL_Master(H264_Alta).mp4' },
                { duration: '15s Vertical', file: 'Videos/ads/Samsung/S20/Spot Final/SPOT_FINAL_15S_(Vertical)_Master.mp4' },
                { duration: '15s Horizontal', file: 'Videos/ads/Samsung/S20/Spot Final/SPOT_FINAL_15S_(Horizontal)_Master.mp4' },
                { duration: '6s', file: 'Videos/ads/Samsung/S20/Spot Final/SPOT_FINAL 6s.mp4' },
                { duration: '5s', file: 'Videos/ads/Samsung/S20/Spot Final/SPOT_FINAL5s.mp4' }
            ]
        },
        
        // Samsung TV - QLED 8K
        {
            title: 'Samsung TV - QLED 8K',
            titleEs: 'Samsung TV - QLED 8K',
            category: 'ad',
            brand: 'samsung',
            campaign: 'TV QLED 8K',
            icon: '📺',
            thumbnail: 'images/ads/Samsung/TV/QLED_8K/thumb-qled8k.png',
            versions: [
                { duration: 'Full', file: 'Videos/ads/Samsung/TV/QLED 8K/Samsung_QLED8K.mp4' }
            ]
        },
        
        // Samsung TV - QLED 4K
        {
            title: 'Samsung TV - QLED 4K',
            titleEs: 'Samsung TV - QLED 4K',
            category: 'ad',
            brand: 'samsung',
            campaign: 'TV QLED 4K',
            icon: '📺',
            thumbnail: 'images/ads/Samsung/TV/QLED_4K/thumb-qled4k.png',
            versions: [
                { duration: 'Full', file: 'Videos/ads/Samsung/TV/QLED 4K/Samsung_QLED4K.mp4' }
            ]
        },
        
        // Samsung TV - General
        {
            title: 'Samsung TV - General',
            titleEs: 'Samsung TV - General',
            category: 'ad',
            brand: 'samsung',
            campaign: 'TV General',
            icon: '📺',
            thumbnail: 'images/ads/Samsung/TV/General/thumb-general.png',
            versions: [
                { duration: '30s', file: 'Videos/ads/Samsung/TV/General/Samsung_General_30s.mp4' }
            ]
        },
        
        // Samsung TV - Crystal UHD
        {
            title: 'Samsung TV - Crystal UHD',
            titleEs: 'Samsung TV - Crystal UHD',
            category: 'ad',
            brand: 'samsung',
            campaign: 'TV Crystal UHD',
            icon: '💎',
            thumbnail: 'images/ads/Samsung/TV/Crystal_UHD/thumb-UHD.png',
            versions: [
                { duration: '15s', file: 'Videos/ads/Samsung/TV/Crystal UHD/15s_UHD-Crystal.mp4' }
            ]
        },
        
        // Samsung Flip
        {
            title: 'Samsung Z Flip',
            titleEs: 'Samsung Z Flip',
            category: 'ad',
            brand: 'samsung',
            campaign: 'Flip',
            icon: '📱',
            thumbnail: 'images/ads/Samsung/Flip/thumb-z-flip.png',
            versions: [
                { duration: '60s', file: 'Videos/ads/Samsung/Flip/SamsungZFlip_60s.mp4' }
            ]
        },
        
        // ========== SONY CAMPAIGNS ==========
        
        // Sony - Shark Tank HouseSpoon
        {
            title: 'Sony - Shark Tank HouseSpoon',
            titleEs: 'Sony - Shark Tank HouseSpoon',
            category: 'ad',
            brand: 'sony',
            campaign: 'Shark Tank HouseSpoon',
            icon: '🦈',
            thumbnail: 'images/ads/Sony/thumb-HouseSpoon.png',
            versions: [
                { duration: 'Full', file: 'Videos/ads/Sony/Sony HouseSpoon - Shark Tank.mp4' }
            ]
        },
        
        // Sony - Shark Tank Carton Made
        {
            title: 'Sony - Shark Tank Carton Made',
            titleEs: 'Sony - Shark Tank Carton Made',
            category: 'ad',
            brand: 'sony',
            campaign: 'Shark Tank Carton Made',
            icon: '🦈',
            thumbnail: 'images/ads/Sony/thumb-cartonmade.png',
            versions: [
                { duration: 'Full', file: 'Videos/ads/Sony/Sony Carton Made - Shark Tank.mp4' }
            ]
        },
        
        // Sony - Lo Ultimo
        {
            title: 'Sony - Lo Último',
            titleEs: 'Sony - Lo Último',
            category: 'ad',
            brand: 'sony',
            campaign: 'Lo Último',
            icon: '📰',
            thumbnail: 'images/ads/Sony/Lo_Ultimo/thumb-lo-ultimo.png',
            versions: [
                { duration: 'Full', file: 'Videos/ads/Lo Ultimo/Lo_Ultimo.mp4' }
            ]
        },
        
        // Sony - Didilab 
        {
            title: 'Sony - Didilab Reducción',
            titleEs: 'Sony - Didilab Reducción',
            category: 'ad',
            brand: 'sony',
            campaign: 'Didilab Reducción',
            icon: '🧪',
            thumbnail: 'images/ads/Sony/Didilab/thumb-didilab.png',
            versions: [
                { duration: 'Ep2', file: 'Videos/ads/Didilab/Didilab_E2_Reducción_Marzo17.mp4' },
                { duration: 'Ep4', file: 'Videos/ads/Didilab/DIDI_ANDES_DIDI LAB_RED_CAP4_SKTCO_S.mp4' },
                { duration: 'Ep6', file: 'Videos/ads/Didilab/DIDI_ANDES_DIDI LAB_RED_CAP6_SKTCO_S.mp4' }
            ]
        },
        

        
        // ========== HOTELS CAMPAIGNS ==========
        
        // Termales El Otoño - TDO 2m
        {
            title: 'Termales El Otoño - 2 Min',
            titleEs: 'Termales El Otoño - 2 Min',
            category: 'ad',
            brand: 'hotels',
            campaign: 'Termales 2 Min',
            icon: '♨️',
            thumbnail: 'images/ads/termales-el-otoño/thumb-termales-el-otoño.png',
            versions: [
                { duration: '2 Min', file: 'Videos/ads/Termales El Otoño/TDO_2m_Baja_2.mp4' },
                { duration: '15s', file: 'Videos/ads/Termales El Otoño/Presidencial_10s_Baja.mp4' },
                { duration: 'Full', file: 'Videos/ads/Termales El Otoño/Experiencia_VIP_baja.mp4' }
            ]
        }
    ],
    
    // ===== SHORT FILMS =====
    // Add your short films here using the template above
    shortFilms: []
};
/* ==========================================
   LANGUAGE SWITCHER FUNCTION
   ========================================== */
function switchLanguage(lang) {
    currentLang = lang;
    
    // Update active button styling
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update all text elements with language attributes
    document.querySelectorAll('[data-en]').forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) {
            if (el.tagName === 'INPUT') {
                el.placeholder = text;
            } else {
                el.textContent = text;
            }
        }
    });

    // Update placeholder text for inputs
    document.querySelectorAll('[data-placeholder-en]').forEach(el => {
        el.placeholder = el.getAttribute(`data-placeholder-${lang}`);
    });

    // Re-render projects with new language
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    renderProjects(activeFilter);
}

// Attach language switcher to buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        switchLanguage(this.dataset.lang);
    });
});

/* ==========================================
   RENDER PROJECTS ON PAGE (UPDATED)
   ========================================== */
function renderProjects(filter = 'archive') {
    const grid = document.getElementById('projectsGrid');
    const categoryCards = document.getElementById('categoryCards');
    const brandSelector = document.getElementById('brandSelector');
    const backToArchive = document.getElementById('backToArchive');
    
    // Clear everything
    grid.innerHTML = '';
    
    if (filter === 'archive') {
        // Show category cards (initial archive view)
        categoryCards.style.display = 'grid';
        brandSelector.style.display = 'none';
        grid.style.display = 'none';
        backToArchive.style.display = 'none';
        
        // Hide any ad brand selector
        const adBrandSelector = document.getElementById('adBrandSelector');
        if (adBrandSelector) adBrandSelector.style.display = 'none';
        
        // Remove any campaign cards container
        const campaignCardsContainer = document.getElementById('campaignCards');
        if (campaignCardsContainer) campaignCardsContainer.remove();
        
    } else if (filter === 'promos') {
        // Show brand selector for promos
        categoryCards.style.display = 'none';
        brandSelector.style.display = 'grid';
        grid.style.display = 'none';
        backToArchive.style.display = 'inline-flex';
        
        // Hide any ad brand selector
        const adBrandSelector = document.getElementById('adBrandSelector');
        if (adBrandSelector) adBrandSelector.style.display = 'none';
        
        // Remove any campaign cards container
        const campaignCardsContainer = document.getElementById('campaignCards');
        if (campaignCardsContainer) campaignCardsContainer.remove();
        
    } else if (filter === 'ad') {
        // Show ad brand selector
        categoryCards.style.display = 'none';
        brandSelector.style.display = 'none';
        grid.style.display = 'none';
        backToArchive.style.display = 'inline-flex';
        
        // Remove any existing ad brand selector
        let adBrandSelector = document.getElementById('adBrandSelector');
        if (adBrandSelector) adBrandSelector.remove();
        
        // Remove any campaign cards container
        const campaignCardsContainer = document.getElementById('campaignCards');
        if (campaignCardsContainer) campaignCardsContainer.remove();
        
        // Create and render ad brand selector
        renderAdBrandSelector();
        
    } else {
        // Show regular projects for other categories (documentary, short)
        categoryCards.style.display = 'none';
        brandSelector.style.display = 'none';
        grid.style.display = 'grid';
        backToArchive.style.display = 'inline-flex';
        
        // Hide any ad brand selector
        const adBrandSelector = document.getElementById('adBrandSelector');
        if (adBrandSelector) adBrandSelector.style.display = 'none';
        
        // Remove any campaign cards container
        const campaignCardsContainer = document.getElementById('campaignCards');
        if (campaignCardsContainer) campaignCardsContainer.remove();
        
        // Get projects for selected category
        let projectsToShow = [];
        if (filter === 'documentary') {
            projectsToShow = projects.documentaries || [];
        } else if (filter === 'ad') {
            projectsToShow = projects.ads || [];
        } else if (filter === 'short') {
            projectsToShow = projects.shortFilms || [];
        }
        
        // Render each project
        projectsToShow.forEach(project => {
            renderProjectCard(project, grid);
        });
    }
}
/* ==========================================
   RENDER AD BRAND SELECTOR (Samsung, Sony, Hotels)
   ========================================== */
function renderAdBrandSelector() {
    const container = document.querySelector('.projects-container');
    const backBtn = document.getElementById('backToArchive');
    
    // Create brand selector container
    const brandSelector = document.createElement('div');
    brandSelector.id = 'adBrandSelector';
    brandSelector.className = 'ad-brand-selector';
    
    // Count projects per brand
    const brandCounts = {
        samsung: projects.ads.filter(ad => ad.brand === 'samsung').length,
        sony: projects.ads.filter(ad => ad.brand === 'sony').length,
        hotels: projects.ads.filter(ad => ad.brand === 'hotels').length
    };
    
    // Create brand cards
    const brands = [
        { 
            name: 'Samsung', 
            nameEs: 'Samsung',
            brand: 'samsung', 
            count: brandCounts.samsung,
            className: 'samsung'
        },
        { 
            name: 'Sony', 
            nameEs: 'Sony',
            brand: 'sony', 
            count: brandCounts.sony,
            className: 'sony'
        },
        { 
            name: 'Hotels', 
            nameEs: 'Hoteles',
            brand: 'hotels', 
            count: brandCounts.hotels,
            className: 'hotels'
        }
    ];
    
    brands.forEach(brand => {
        const card = document.createElement('div');
        card.className = `ad-brand-card ${brand.className}`;
        card.dataset.adBrand = brand.brand;
        
        const brandName = currentLang === 'es' ? brand.nameEs : brand.name;
        const countText = currentLang === 'es' 
            ? `${brand.count} ${brand.count === 1 ? 'Spot' : 'Spots'}` 
            : `${brand.count} ${brand.count === 1 ? 'Spot' : 'Spots'}`;
        
        card.innerHTML = `
            <div class="ad-brand-overlay">
                <h3 class="ad-brand-title">${brandName}</h3>
                <p class="ad-brand-count">${countText}</p>
            </div>
        `;
        
        brandSelector.appendChild(card);
    });
    
    // Insert after back button
    container.insertBefore(brandSelector, backBtn.nextSibling);

    // Set up back button state for ads brand selection
    backBtn.style.display = 'inline-flex'; // Make sure it's visible
    backBtn.dataset.currentView = 'brand-selection';
    backBtn.dataset.currentCategory = 'ads'; // Important: tell it this is ads!
    
    // Update back button text
    const backTextEn = 'Back to Archive';
    const backTextEs = 'Volver al Archivo';
    const backBtnText = backBtn.querySelector('span:last-child');
    if (backBtnText) {
        backBtnText.textContent = currentLang === 'es' ? backTextEs : backTextEn;
    }
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🏷️  SHOWING AD BRAND SELECTOR');
    console.log('Set currentView:', backBtn.dataset.currentView);
    console.log('Set currentCategory:', backBtn.dataset.currentCategory);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
}

/* ==========================================
   RENDER AD CAMPAIGNS FOR SELECTED BRAND
   ========================================== */
function renderAdCampaigns(brand) {
    console.log('renderAdCampaigns called with:', brand);
    
    const grid = document.getElementById('projectsGrid');
    const backBtn = document.getElementById('backToArchive');
    const adBrandSelector = document.getElementById('adBrandSelector');
    
    // Hide ad brand selector
    if (adBrandSelector) {
        adBrandSelector.style.display = 'none';
    }
    
    // IMPORTANT: Show the back button!
    backBtn.style.display = 'inline-flex';
    
    // Update back button text to go back to brand selection
    const backTextEn = 'Back to Brand Selection';
    const backTextEs = 'Volver a Selección de Marcas';
    const backBtnText = backBtn.querySelector('span:last-child');
    if (backBtnText) {
        backBtnText.textContent = currentLang === 'es' ? backTextEs : backTextEn;
    }
    
    // Store current state for back button
    backBtn.dataset.currentView = 'brand-campaigns';
    backBtn.dataset.currentCategory = 'ads'; // IMPORTANT: Tell back button this is ads!
    backBtn.dataset.currentBrand = brand;
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📺 SHOWING AD VIDEOS');
    console.log('Set currentView:', backBtn.dataset.currentView);
    console.log('Set currentCategory:', backBtn.dataset.currentCategory);
    console.log('Set currentBrand:', backBtn.dataset.currentBrand);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    
    // Show and clear grid
    grid.style.display = 'grid';
    grid.innerHTML = '';
    
    // Get all ads for selected brand
    const brandAds = projects.ads.filter(ad => ad.brand === brand);
    
    console.log('Rendering ads for', brand, ':', brandAds.length);
    
    // Render each ad as a video card
    brandAds.forEach(ad => {
        renderProjectCard(ad, grid);
    });
}

/* ==========================================
   RENDER CAMPAIGN VIDEO PLAYER
   ========================================== */
function renderCampaignVideo(campaign) {
    console.log('renderCampaignVideo called with:', campaign);
    
    const grid = document.getElementById('projectsGrid');
    const campaignCards = document.getElementById('campaignCards');
    
    // Hide campaign cards
    if (campaignCards) {
        campaignCards.style.display = 'none';
    }
    
    // Show and clear grid
    grid.style.display = 'grid';
    grid.innerHTML = '';
    
    // Render the campaign as a video card
    renderProjectCard(campaign, grid);
}

/* ==========================================
   CATEGORY CARD CLICK HANDLERS
   ========================================== */
document.addEventListener('click', function(e) {
    // Handle category card clicks
    if (e.target.closest('.category-card')) {
        const categoryCard = e.target.closest('.category-card');
        const category = categoryCard.dataset.category;
        renderProjects(category);
    }
    
    // Handle brand card clicks
    if (e.target.closest('.brand-card')) {
        const brandCard = e.target.closest('.brand-card');
        const brand = brandCard.dataset.brand;
        renderBrandProjects(brand);
    }
});

/* ==========================================
   BACK TO ARCHIVE BUTTON HANDLER (UPDATED)
   ========================================== */
document.getElementById('backToArchive').addEventListener('click', function() {
    // Hide back button
    this.style.display = 'none';
    
    // Hide sidebars
    document.getElementById('leftSidebar').style.display = 'none';
    document.getElementById('rightSidebar').style.display = 'none';
    
    // Remove grid margin classes
    const grid = document.getElementById('projectsGrid');
    grid.classList.remove('with-left-sidebar', 'with-right-sidebar');
    
    // Show archive view
    renderProjects('archive');
});

/* ==========================================
   RENDER BRAND PROJECTS (AXN or Sony)
   ========================================== */
function renderBrandProjects(brand) {
    console.log('renderBrandProjects called with:', brand); // Debug
    
    const grid = document.getElementById('projectsGrid');
    const categoryCards = document.getElementById('categoryCards');
    const brandSelector = document.getElementById('brandSelector');
    const backToArchive = document.getElementById('backToArchive');
    const leftSidebar = document.getElementById('leftSidebar');
    const rightSidebar = document.getElementById('rightSidebar');
    
    // Check if all elements exist
    if (!grid || !categoryCards || !brandSelector || !backToArchive || !leftSidebar || !rightSidebar) {
        console.error('Missing elements:', {
            grid: !!grid,
            categoryCards: !!categoryCards,
            brandSelector: !!brandSelector,
            backToArchive: !!backToArchive,
            leftSidebar: !!leftSidebar,
            rightSidebar: !!rightSidebar
        });
        return;
    }
    
    // Show back to archive button
    backToArchive.style.display = 'inline-flex';
    
    // Hide category cards and brand selector
    categoryCards.style.display = 'none';
    brandSelector.style.display = 'none';
    
    // Show projects grid
    grid.style.display = 'grid';
    grid.innerHTML = '';
    
    // Configure sidebars based on which brand is active
    if (brand === 'axn') {
        // AXN is expanded, Sony collapses to right
        leftSidebar.style.display = 'none';
        leftSidebar.classList.remove('show');
        
        rightSidebar.style.display = 'flex';
        rightSidebar.className = 'brand-sidebar right sony';
        
        const rightBrandName = rightSidebar.querySelector('.sidebar-brand-name');
        const rightProjectCount = rightSidebar.querySelector('.sidebar-project-count');
        
        if (rightBrandName) rightBrandName.textContent = 'SONY';
        if (rightProjectCount) rightProjectCount.textContent = '12 Projects';
        
        rightSidebar.onclick = () => renderBrandProjects('sony');
        
        // Trigger animation after a small delay
        setTimeout(() => {
            rightSidebar.classList.add('show');
        }, 50);
        
        grid.classList.remove('with-left-sidebar');
        grid.classList.add('with-right-sidebar');
    } else if (brand === 'sony') {
        // Sony is expanded, AXN collapses to left
        rightSidebar.style.display = 'none';
        rightSidebar.classList.remove('show');
        
        leftSidebar.style.display = 'flex';
        leftSidebar.className = 'brand-sidebar left axn';
        
        const leftBrandName = leftSidebar.querySelector('.sidebar-brand-name');
        const leftProjectCount = leftSidebar.querySelector('.sidebar-project-count');
        
        if (leftBrandName) leftBrandName.textContent = 'AXN';
        if (leftProjectCount) leftProjectCount.textContent = '8 Projects';
        
        leftSidebar.onclick = () => renderBrandProjects('axn');
        
        // Trigger animation after a small delay
        setTimeout(() => {
            leftSidebar.classList.add('show');
        }, 50);
        
        grid.classList.remove('with-right-sidebar');
        grid.classList.add('with-left-sidebar');
    }
    
    // Get projects for selected brand
    const brandProjects = brand === 'axn' ? projects.promos.axn : projects.promos.sony;
    
    console.log('Rendering projects for', brand, ':', brandProjects.length); // Debug
    
    // Render each project
    brandProjects.forEach(project => {
        renderProjectCard(project, grid);
    });
}

/* ==========================================
   ALL CLICK HANDLERS (UNIFIED)
   ========================================== */
document.addEventListener('click', function(e) {
// Handle back to archive button (FIXED VERSION)
    if (e.target.closest('#backToArchive')) {
        e.preventDefault();
        e.stopPropagation();
        
        const backBtn = document.getElementById('backToArchive');
        const currentView = backBtn.dataset.currentView;
        const currentCategory = backBtn.dataset.currentCategory;
        
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('🔙 BACK BUTTON CLICKED');
        console.log('currentView:', currentView);
        console.log('currentCategory:', currentCategory);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        
        if (currentView === 'brand-campaigns') {
            console.log('📍 Going back from videos to brand selection');
            
            const categoryCards = document.getElementById('categoryCards');
            const brandSelector = document.getElementById('brandSelector');
            const projectsGrid = document.getElementById('projectsGrid');
            const adBrandSelector = document.getElementById('adBrandSelector');
            
            console.log('Elements found:');
            console.log('  - categoryCards:', categoryCards ? 'EXISTS' : 'NULL');
            console.log('  - brandSelector:', brandSelector ? 'EXISTS' : 'NULL');
            console.log('  - projectsGrid:', projectsGrid ? 'EXISTS' : 'NULL');
            console.log('  - adBrandSelector:', adBrandSelector ? 'EXISTS' : 'NULL');
            
            // IMPORTANT: Hide everything first (like muting all tracks)
            categoryCards.style.display = 'none';
            brandSelector.style.display = 'none';
            projectsGrid.style.display = 'none';
            if (adBrandSelector) adBrandSelector.style.display = 'none';
            
            if (currentCategory === 'promos') {
                console.log('✅ Showing PROMO brand selector (AXN/Sony)');
                // Show broadcaster brand selector (AXN vs Sony)
                brandSelector.style.display = 'grid';
                renderBroadcasterBrands();
                
                // IMPORTANT: Keep the back button visible!
                backBtn.style.display = 'inline-flex';
                backBtn.textContent = '← Back to Archive';
                backBtn.dataset.currentView = 'brand-selection';
                
                console.log('✅ Back button is now visible and ready');
            } else if (currentCategory === 'ads') {
                console.log('✅ Showing AD brand selector (Samsung/Sony/Hotels)');
                // Show ad brand selector (Samsung/Sony/Hotels)
                if (adBrandSelector) {
                    console.log('   → Using existing adBrandSelector');
                    adBrandSelector.style.display = 'grid';
                } else {
                    console.log('   → Creating new adBrandSelector');
                    renderAdBrandSelector();
                }
                
                // IMPORTANT: Keep the back button visible!
                backBtn.style.display = 'inline-flex';
                backBtn.textContent = '← Back to Archive';
                backBtn.dataset.currentView = 'brand-selection';
                
                console.log('✅ Back button is now visible and ready');
            }
            
        } else if (currentView === 'brand-selection') {
            console.log('📍 Going back from brand selection to archive');
            
            const categoryCards = document.getElementById('categoryCards');
            const brandSelector = document.getElementById('brandSelector');
            const projectsGrid = document.getElementById('projectsGrid');
            const adBrandSelector = document.getElementById('adBrandSelector');
            
            // Hide brand selector and projects
            brandSelector.style.display = 'none';
            projectsGrid.style.display = 'none';
            if (adBrandSelector) adBrandSelector.style.display = 'none';
            
            // Show category cards (archive view)
            categoryCards.style.display = 'grid';
            
            console.log('✅ Showing archive (4 category cards)');
            
            // Hide the back button
            backBtn.style.display = 'none';
            
            // Reset state
            backBtn.textContent = '← Back';
            backBtn.dataset.currentView = '';
            backBtn.dataset.currentCategory = '';
            
            // Re-render archive view to ensure everything is fresh
            renderProjects('archive');
        }
        
        
        return;
    }

    
    // Handle category card clicks
    if (e.target.closest('.category-card')) {
        e.preventDefault();
        e.stopPropagation();
        
        const categoryCard = e.target.closest('.category-card');
        const category = categoryCard.dataset.category;
        console.log('Category clicked:', category);
        renderProjects(category);
        return;
    }
    
    // Handle brand card clicks (AXN/Sony for Promos)
    if (e.target.closest('.brand-card')) {
        e.preventDefault();
        e.stopPropagation();
        
        const brandCard = e.target.closest('.brand-card');
        const brand = brandCard.dataset.brand;
        console.log('Brand clicked:', brand);
        renderBrandProjects(brand);
        return;
    }
    
    // Handle ad brand card clicks (Samsung/Sony/Hotels)
    if (e.target.closest('.ad-brand-card')) {
        e.preventDefault();
        e.stopPropagation();
        
        const adBrandCard = e.target.closest('.ad-brand-card');
        const brand = adBrandCard.dataset.adBrand;
        console.log('Ad Brand clicked:', brand);
        renderAdCampaigns(brand);
        return;
    }

});


/* ==========================================
   RENDER INDIVIDUAL PROJECT CARD
   ========================================== */
function renderProjectCard(project, container) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    // Get translated title and category
    const projectTitle = currentLang === 'es' ? project.titleEs : project.title;
    const categoryText = translations[currentLang].categories[project.category];
    
    // Build version selector HTML if project has versions
    let versionsHTML = '';
    if (project.versions && project.versions.length > 1) {
        versionsHTML = `
            <div class="project-versions">
                <span class="version-label">${currentLang === 'es' ? 'Versión:' : 'Version:'}</span>
                <select class="version-select" onchange="changeVersion(this, '${project.versions[0].file}')">
                    ${project.versions.map((v, index) => 
                        `<option value="${v.file}" ${index === 0 ? 'selected' : ''}>${v.duration}</option>`
                    ).join('')}
                </select>
            </div>
        `;
    }
    
    // Build the card HTML
    card.innerHTML = `
        <div class="project-thumbnail">
            <img src="${project.thumbnail}" alt="${projectTitle}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="thumbnail-icon">${project.icon}</div>
            <div class="play-overlay"></div>
        </div>
        <div class="project-info">
            <h3 class="project-title">${projectTitle}</h3>
            <p class="project-category">${categoryText}</p>
        </div>
        ${versionsHTML}
    `;
    
    // Store current video file
    const videoToPlay = project.versions ? project.versions[0].file : project.videoFile;
    card.dataset.currentVideo = videoToPlay;
    
    // When card is clicked, open video modal
    card.addEventListener('click', (e) => {
        // Don't trigger if clicking on select dropdown
        if (e.target.tagName !== 'SELECT') {
            openVideoModal(card.dataset.currentVideo);
        }
    });
    
    // Add card to container
    container.appendChild(card);
}

/* ==========================================
   CHANGE VERSION (When dropdown changes)
   ========================================== */
function changeVersion(selectElement, defaultFile) {
    const newFile = selectElement.value;
    const card = selectElement.closest('.project-card');
    card.dataset.currentVideo = newFile;
}

/* ==========================================
   VIDEO MODAL FUNCTIONS
   ========================================== */
function openVideoModal(videoPath) {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('videoPlayer');
    const source = document.getElementById('videoSource');
    
    // Set video source and play
    source.src = videoPath;
    video.load();
    video.play();
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('videoPlayer');
    
    // Stop video
    video.pause();
    video.currentTime = 0;
    
    // Hide modal
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when X button is clicked
document.getElementById('closeModal').addEventListener('click', closeVideoModal);

// Close modal when clicking outside video
document.getElementById('videoModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeVideoModal();
    }
});

// Close modal when ESC key is pressed
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeVideoModal();
    }
});



/* ==========================================
   SIDE MENU NAVIGATION
   ========================================== */
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Update active menu item
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        
        // Show corresponding page
        const pageId = this.dataset.page;
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
        
        // If clicking on Projects page, reset to archive view
        if (pageId === 'projects') {
            console.log('📂 Projects menu clicked - going to archive');
            renderProjects('archive');
        }
    });
});

/* ==========================================
   CONTACT FORM SUBMISSION
   ========================================== */
// Form is now handled by Formspree - no JavaScript needed!
// Formspree will show a confirmation page after submission.

/* ==========================================
   INITIALIZE PAGE
   ========================================== */
// Start with archive view (category cards visible)
// Wait for DOM to be fully loaded before initializing
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        renderProjects('archive');
    });
} else {
    // DOM is already loaded
    renderProjects('archive');
}