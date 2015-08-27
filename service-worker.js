/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

'use strict';



var PrecacheConfig = [["fonts/RobotoCondensed-Bold.woff","b957df7eb343c0e307cc3c4b5e642b0a"],["fonts/RobotoCondensed-BoldItalic.woff","fea624b4c2620b6f5db428e227f2845c"],["fonts/RobotoCondensed-Italic.woff","f6a7296c31954622227519621438298d"],["fonts/RobotoCondensed-Light.woff","febf32a2c55979f8644ba9dfe804ca2b"],["fonts/RobotoCondensed-LightItalic.woff","f09b84ef0af8be7687407830447ec594"],["fonts/RobotoCondensed-Regular.woff","94e480548f3165c92301d1e317593e90"],["fonts/bootstrap/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["google3a4f2eac9df8c28c.html","603adae983589b0704b1bfad96b0a1b7"],["googlefe3be4dd0e0c9e30.html","d6e2073753367b64262695c3f198e44a"],["images/46e84bbcba355.jpg","880a2749eb280d9752c4044796aaa468"],["images/46e84c8214ac9.jpg","952a49fb63ac8de9c1e0fb22ddd4020e"],["images/46e84c8214ac9th.jpg","931cbfec152e2595b25b32575dcb3358"],["images/46e84cdfd0e28.jpg","bc5e8d160fb2008f4efe3f031adc78a7"],["images/46e84cdfd0e28th.jpg","288ece98a4a4bcb841d451a6339659cb"],["images/46e84d362ff63.jpg","5f6e1f78cac9a31a23d0bd949e26949b"],["images/46e97fbec1c6b.jpg","ae912564d7acdd5d3919499e31a585b1"],["images/46e97fd89ac6b.jpg","b38cc0d59de678165bcd4917f5422db9"],["images/46e97ff991171.jpg","a7feb642be0a9f6405d2cb28de70ad65"],["images/46e9800d3bb21.jpg","44927b5f853877fe55fade549dd0c7aa"],["images/46e9802203975.jpg","c73e29ec80160e55cef13d5078067031"],["images/46e9803436e66.jpg","a888824e29a47e789cfa1a9de20139f4"],["images/46e9804612540.jpg","6f9a250091222416d490272ba57211ab"],["images/46e98056878d0.jpg","ee7ad4e18aca1717a5edf1ac476e0963"],["images/46e9806de9438.jpg","0546ebf9dd528539856c3c495f43c377"],["images/46e9807b4f7ca.jpg","6d05f2b68733626dc1529e165600b55a"],["images/46e9808c5468e.jpg","1adb66211b01191111d577586355560c"],["images/46e9809c212db.jpg","c7fba65b36b56c52383f8e0ff3238b90"],["images/46e980b680754.jpg","b61a3ec495e715d5d87886a963dcf56a"],["images/46eea1a612620.jpg","c0863ee362c60bc273924a1b7535b372"],["images/46eea1a612620th.jpg","423b85eec67e0ea554852035838965a6"],["images/46eea1c93234b.jpg","ab1d283c87fdddc76b930e1f5aa569c3"],["images/46eea1c93234bth.jpg","eadc4026a2b2356f2333d5ebf43ca0fd"],["images/46eea1f65bd1e.jpg","606a7fec40e098408067b2645e2f15c0"],["images/46eea1f65bd1eth.jpg","9b8949a417fbf63dc1983304845fa853"],["images/46eea264d8997.jpg","b28b6e753ac626f2fbb7a141935214d0"],["images/46eea264d8997th.jpg","34930518c4c45d3b6b5eb4c7bb0cd461"],["images/46eea278a5605.jpg","a87db144760683180393d9fb9e9ebd05"],["images/46eea278a5605th.jpg","9a46f159abbe7630d80484791ed1a6da"],["images/46eea2ad21ab0.jpg","493d341d72eca73e1806e925632b91af"],["images/46eea2ad21ab0th.jpg","1cc1e235267fb8b80fc648129059fe3b"],["images/46eea2c28d245.jpg","583340a0b67d7dc8c3f59e0c9a6631b8"],["images/46eea2c28d245th.jpg","26dad006e27296e9082436f98bcc26f8"],["images/46eea2dd46681.jpg","38731a3544de2741618b2489b9db3764"],["images/46eea2dd46681th.jpg","fe19d8ca9c6a071bd60c9f8401ed26fa"],["images/46eee995f1247.jpg","7daee59937f04737ec897949a22f9656"],["images/46eee9a648b92.jpg","1a29fc2096c15e7a802cbd413ef86cff"],["images/46eee9b71a5fe.jpg","263e82e8c06d68d168f6cbe2618a375e"],["images/46eee9c461371.jpg","30a8a73eda47edec1cf62a42fc144bec"],["images/46eee9d229172.jpg","c857f49cf5863ae4ca61004fe6e73abd"],["images/46f00ad42ea8f.jpg","245af38ba3771eff1bebdd3de84e5e68"],["images/46f0149371bce.jpg","a0fae47509371c2287f6b06ac01a78e8"],["images/46f014be91932.jpg","18b8a6cd3c3ed65eb6354d1edcfd8b63"],["images/46f014d67ba86.jpg","97bff0fbdeecc8a83bb7fd6f9e3f46ef"],["images/46f01edcd9c0e.jpg","630012816a105672d4b52e594deffdd1"],["images/46f020bd8a5a6.jpg","1106eed2203e4bf4c49d599aad677ee5"],["images/46f020d460e73.jpg","c57f3a4f466d230416c5e7966cdc975a"],["images/46f020ef8807b.jpg","2e9fd1476f73377d9ff501f5f95b18e5"],["images/46f02495aa072.jpg","24d4112aa4eaa317cd98c8f9aac030de"],["images/46f024af8f3bb.jpg","ec0991cab5e513f4c9c2b21e6fc07b4e"],["images/46f024d039dd2.jpg","8c23d4ba4c1ccc1109b4ff345f12e7bc"],["images/46f024e89e050.jpg","6f64ff3aa24655673cd4273a6f7abeea"],["images/46f024fe32a66.jpg","89a5953117ed0409115f60e0d94654a2"],["images/46f1760aa8f85.jpg","2ffd5a76dd581203df67b5ca7cdb2013"],["images/46f17658bf21a.jpg","f2aefeeaef38b0ef3e09a33298aa03ff"],["images/46f176ec67993.jpg","cb01a1e111511ee26f368dba14149c26"],["images/46f17721e6adf.jpg","522101a8309d51700e4c17ba7fc6fa80"],["images/46f177bd19fa1.jpg","bfdb5284b5f61b321587390c177cb64e"],["images/46f17800d62ce.jpg","15050841ae1d44f71220570127e9a8d5"],["images/46f178ed8140e.jpg","8f9623839c6ad43294f497db54a12b08"],["images/46f179a222799.jpg","28a2579392e0b0d1bf3499b7a7373ca7"],["images/46f17a1b56096.jpg","d0ad84a4c8b97c842b7f6ea2834682f9"],["images/46f17aeddcd2d.jpg","121469001993ebaa67a2a53c166741fa"],["images/46f17b00a4b74.jpg","29b4dab65a1f6de93fb93be158f1b960"],["images/46f17b6f4835c.jpg","dc72ba9f0e244e49d9f787e260e0373a"],["images/46f17bb9f34a2.jpg","c54b54498f6bbf9e10999dcddca16e61"],["images/46f17bb9f34a2th.jpg","adab324ff86e5f00a41fe43889e2e466"],["images/46f17c008f5d1.jpg","69dc338f5fc6a06b7a8a8d2f283722d1"],["images/46f17c5301f5f.jpg","d503e3e61390a5a3f3cc4b5beae4fd5e"],["images/46f17d191d4be.jpg","2a1b2c3339daa30655167295f8357ede"],["images/46f17d191d4beth.jpg","90087fec9f6a3a8fc2db34cd8d77697a"],["images/46f17ee42f7ed.jpg","8ee33e10acd4ed5d31b13cd010defaef"],["images/46f17f1225d77.jpg","53ad82c1ea2854492f8a2a7057227e4a"],["images/46f17f392ad12.jpg","1a64310cf012edf90fb48b949f6be9ff"],["images/46f25bf16f18f.jpg","088378316f46acb844d9a81ea113b989"],["images/46f25bf16f18fth.jpg","ed7186d2fafb988d592939d038e47339"],["images/46f25c0e12697.jpg","83952c28615bb76e068179140bb7bfc1"],["images/46f25c0e12697th.jpg","eecec338d52a6570074048ccbf87cd38"],["images/46f25c243bf46.jpg","3971958686f4feb88bf152c78548905c"],["images/46f25c243bf46th.jpg","2057108ea177502a1b6d2a4280f3b5ad"],["images/46f25c483e7a7.jpg","33eb4aa60193726f00c9481cde671a58"],["images/46f25c483e7a7th.jpg","3406c085d02e64349af57e94f145f8e7"],["images/46f25c6071ced.jpg","88a18a0eb1add4b1f16f72146b5d2d75"],["images/46f25c6071cedth.jpg","6a2ec33a489bfaadb581c28681225be7"],["images/46f25c7ebd906.jpg","91ee8596cdbeaf3e6ed1d9835c4af04d"],["images/46f25c7ebd906th.jpg","11e8c982c5a442db562ea9fb608adbb7"],["images/46f25ca039ceb.jpg","49dd8ecc2adebdcf36bae19f2033cc0c"],["images/46f25ca039cebth.jpg","b2170e86438e8cca70d3baaa8d09d561"],["images/46f25d2a17f5e.jpg","b388d606e2bfc8cdaa5bb9f21175426b"],["images/46f25d61e04b0.jpg","f0c53cb258c2640ef643856866151199"],["images/46f25d7a07107.jpg","ee5a35f8182bebbafe3a91294eda7557"],["images/46f25d91ec9d4.jpg","5590eaad377e677520f2639ebb381373"],["images/46f25db0a1016.jpg","2781a02b2dfb181203e04977b2267ad7"],["images/46f25e08ef57d.jpg","b20e32faf4fb850fdd46cf1d38cfc7dc"],["images/46f25e2a5813e.jpg","41a4d7c5ddfcc1e07f9e79341eb90c07"],["images/46f25e986216c.jpg","616208c8b7112daf0a3c1ed89972922b"],["images/46f25f422a59c.jpg","481c75ca0c3ba8e48b649900590d9b09"],["images/46f25f69454c5.jpg","e2c223585fcda4278dddb5441b45e628"],["images/46f2722d7a6b1.jpg","02056a0d97af1d6d83dcb29ec2613fc8"],["images/46f2725829f83.jpg","f3bf1a37bcfda13e8a8e084d3aae108b"],["images/46f27274a8faa.jpg","7a6f962ba835660b8e0fa480635283b4"],["images/46f2728d671e8.jpg","afb2ba55e6c2473175a6808443b596c3"],["images/46f272ab69a3d.jpg","68ae116d2082239c2253b9138a6ecd5c"],["images/46f272c369b11.jpg","6a09712f4c0e2f94af622b2b7f6e614b"],["images/46f272dc73864.jpg","6c2f5d14d23c108d7ab62182a0c2cf31"],["images/46f272f39aa2a.jpg","9bf3bae4274a4f3399a9d7b244e7e5e1"],["images/46f2730dedb59.jpg","6f57e77d8a9dc622a0e0d3f0c8ee21b4"],["images/46f27338a4924.jpg","674c3ed1b80a57d753895c3c07ee769d"],["images/46f2735a2f765.jpg","49f70cfc993c69594c1a2b4e994f12c5"],["images/46f2737d2d1cc.jpg","4fd569c1595f3ffc9db18cca8762241f"],["images/46f27395df632.jpg","bad052585e709ffa1ffca27ecb01cf39"],["images/46f273b378eba.jpg","100427da80b498f1ab379cb953bf1100"],["images/46f273d5a9d57.jpg","baa6e0af3b6afe402bcb73a4f334a5bc"],["images/46f273ee59534.jpg","e585194e7183be22a8c076a823ce0c27"],["images/46f274108f1e2.jpg","aa2169dcd320ff018904072caccf41be"],["images/46f2742d2636b.jpg","0ec6c521b2b6a4989a382c82773d43c1"],["images/46f2744d91b68.jpg","0a1abd4a669fb530ddc0c1cabee0be6b"],["images/46f278ebe7933.jpg","4dc644231a71dae64b503db7f83ead52"],["images/46f2c033a847a.jpg","618bd7428b9c1891e33e39c0afb2fa32"],["images/46f2c0903d149.jpg","3274f35254aa3425607109b59f7b83fb"],["images/46f2c0b2e811f.jpg","0282b02157ac882d1e7fac2eee31283f"],["images/46f2c0ce5f68f.jpg","e009d81cb739eb0d4f0b9924708050af"],["images/46f2c103646e3.jpg","121f5823027fa856b5aeb9fd67b25b5e"],["images/46f2c11a6e4d3.jpg","473ab8133c90c7eb501f9e8411845b20"],["images/46f2c12c006ed.jpg","a2cba4fb2e662b4a337070b1c7c180bb"],["images/46f2c15ac8bae.jpg","e74c87660411e19c27f3bf2a00503d7c"],["images/46f2c16dc173f.jpg","a1ffe7635c15dbf5573638d4c1e61bd2"],["images/46f2c17f03108.jpg","faefefea4bea7e6e920973252c12d5b4"],["images/46f2c38a65fe7.jpg","e7c8d4bd8d92fec83d24138811a2129f"],["images/46f2c3cd21c9b.jpg","f45a435432c6218a9dbac6acb0e92284"],["images/46f2c41357ab0.jpg","85c8de5e051561bdcd7bd11b30bf9b3a"],["images/46f2c45decc6a.jpg","d1994f51b9bd475a1d9ee0241e3f4b6c"],["images/46f2c545cd9ad.jpg","84082dace038f30f1586790fe9a0eda5"],["images/46f2c62219783.jpg","fe9acb34c630d979e4e51d034a2b8183"],["images/46f2c6843970e.jpg","12ab286a2f25a6c465a826028b875b85"],["images/46f2c6a506405.jpg","12ab286a2f25a6c465a826028b875b85"],["images/46f2d87286761.jpg","4668afa6f51361b3ddbfd98746fbd1be"],["images/46f2d8838b620.jpg","fa89221aa21842c5c588348c718ad2c0"],["images/46f2d89844a5a.jpg","512a46bbb8d01af6b94a5dcbfc981f24"],["images/46f2d8a764685.jpg","cd6568d3a6d469cb6d0ab0531a873703"],["images/46f2d8b8cafd8.jpg","8ed5fd45928b67645806e306f5c7c1d0"],["images/46f2d8cb3139d.jpg","b66fac80fca7e4d76819a9a742889f97"],["images/46f2d8dc473f2.jpg","fb31d0c59d0c9fd3fc776f688576953e"],["images/46f2d8eb055cd.jpg","df95e8fa3e043ad550c8f93df978eb75"],["images/46f2d8f7e38f5.jpg","ae84b72b84e3cdd790c30b514d76349a"],["images/46f57317ad9d5.jpg","5f6e1f78cac9a31a23d0bd949e26949b"],["images/46f57317ad9d5th.jpg","a2cf0ff1889cbc5f70ed1e49a1fd35c6"],["images/48bfe423ac702.jpg","7d164e8665122685ddf9671fe9643160"],["images/48bfe43e0677f.jpg","5939036a4a23e5b76c252b6cad3690b7"],["images/48bfe4584ae2e.jpg","fd4929cb20c35729adda971f334995a6"],["images/493fdc5727337.jpg","e4890d641f46020abe97a69f3d696318"],["images/493fddc63b8ab.jpg","d37d883bdf0d3683ccf8bcf32a9ef4e8"],["images/493fdddbd2f6f.jpg","6c4aed007c44c74894fd0455fe2002f0"],["images/493fde144a5ce.jpg","0b2b8e8b1fada7c531cdd00e4f6ae47e"],["images/49764092c566f.jpg","234c1ef81bb487e63f28989db757a752"],["images/49ccb88e4f608.jpg","c1851038f09b43193301f28ec54198a4"],["images/4a633993be455.jpg","573e610cd114789024320ca164390577"],["images/4a633ab9deca5.jpg","414a1d24021b1513e959e4aec5027dbc"],["images/4a633ad173b3b.jpg","d4d0f638117185807ed294918f1d9f2e"],["images/4a633af86926f.jpg","67fbff5e829f63f9d74282273d66b795"],["images/4a633b09e482a.jpg","309df21adea50155072b019414687830"],["images/4a633b28b6727.jpg","a6bc434a5e3dd67bb7c7ea21b1099aeb"],["images/4a633d995b6f7.jpg","77c2c261dc02a7c4f6ce9df5a2eec473"],["images/4a633db0e26fd.jpg","f5b27de6313d9710ed7c87319020eaae"],["images/4a759d0199aa8.jpg","d8ff155e17781ba58f712407a7736f6a"],["images/4a759d0199aa8th.jpg","5d8752229027d682fe25d679b0da8e4d"],["images/5059af5d4db13.jpg","019d74f38b3440d61113e0b7d87e273e"],["images/551960e522ca5.jpg","28db097301cecd59e4692076f890b240"],["images/55197aa62af53th.jpg","5d77b6c248311a2576d21eaf48512f4e"],["images/559c034f2eab9.jpg","787b456fdd95fdd24f7dadbd384e89ca"],["images/559c0431928c5.jpg","8136918f63e2f8c6f1586a5f211d82b0"],["images/559c044a77012.jpg","04e32e8ca1586168f6f6ee831909698f"],["images/95-16.jpg","481c75ca0c3ba8e48b649900590d9b09"],["images/aboveandbetween.jpg","674c3ed1b80a57d753895c3c07ee769d"],["images/abstract-low.jpg","be393cfc4daec859cd4c1c1c10996076"],["images/abstract.jpg","bdd97ab6f650939d76ce05d4a990418c"],["images/bluedrips-closeup.jpg","bad052585e709ffa1ffca27ecb01cf39"],["images/bruise.jpg","6c2f5d14d23c108d7ab62182a0c2cf31"],["images/fearofwhite.jpg","68ae116d2082239c2253b9138a6ecd5c"],["images/fish.jpg","9bf3bae4274a4f3399a9d7b244e7e5e1"],["images/flyme-01.jpg","1a64310cf012edf90fb48b949f6be9ff"],["images/flyme-02.jpg","53ad82c1ea2854492f8a2a7057227e4a"],["images/fp-abstract.jpg","f9730210bfacb1e854c66e5f653f7e27"],["images/goldschmidt-atalanta.jpg","a7feb642be0a9f6405d2cb28de70ad65"],["images/goldschmidt-danae-1.jpg","6d05f2b68733626dc1529e165600b55a"],["images/goldschmidt-danae.jpg","c73e29ec80160e55cef13d5078067031"],["images/goldschmidt-daphne.jpg","ae912564d7acdd5d3919499e31a585b1"],["images/goldschmidt-doris.jpg","44927b5f853877fe55fade549dd0c7aa"],["images/goldschmidt-dream.jpg","616208c8b7112daf0a3c1ed89972922b"],["images/goldschmidt-eugenia-1.jpg","b61a3ec495e715d5d87886a963dcf56a"],["images/goldschmidt-eugenia.jpg","6f9a250091222416d490272ba57211ab"],["images/goldschmidt-europa.jpg","4128de281c9a5318222178f606db06e4"],["images/goldschmidt-harmonia.jpg","0546ebf9dd528539856c3c495f43c377"],["images/goldschmidt-low.jpg","7a7cd4845ba69e0c2c8fc6408ad71b25"],["images/goldschmidt-lutetia-1.jpg","a888824e29a47e789cfa1a9de20139f4"],["images/goldschmidt-melete.jpg","c7fba65b36b56c52383f8e0ff3238b90"],["images/goldschmidt-miscellany.jpg","019d74f38b3440d61113e0b7d87e273e"],["images/goldschmidt-nysa.jpg","b38cc0d59de678165bcd4917f5422db9"],["images/goldschmidt-pales.jpg","1adb66211b01191111d577586355560c"],["images/goldschmidt-panopea.jpg","b09daeb13f35d58f5912a033e6d31709"],["images/goldschmidt-pomona.jpg","ee7ad4e18aca1717a5edf1ac476e0963"],["images/goldschmidt.jpg","322cfbec77ea76f53ac1d0ee070aeef8"],["images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["images/icons/icons-hinted.ttf","d41d8cd98f00b204e9800998ecf8427e"],["images/icons/icons.eot","742c4affdabd597249ab4d8f32ceb5d9"],["images/icons/icons.svg","46661d6d65debc63884004fed6e37e5c"],["images/icons/icons.ttf","43ac9104d6fac184272ba3784167577d"],["images/icons/icons.woff","e470c7159d62bbeedf51a7d98e65ca4d"],["images/icons/icons.woff2","1a75a1500dc4614b85523f4183cdeef7"],["images/icons/placeholder--medium.png","baa033665c8a070a9e5a66c2bd8b0474"],["images/icons/placeholder--small.png","d5efa06871740522ebb8ae5da95b7737"],["images/icons/placeholder--wide.png","0f9f6ff52eac6a13ab562341c6e329d1"],["images/itwasevening.jpg","6f57e77d8a9dc622a0e0d3f0c8ee21b4"],["images/kamarupa-IX.jpg","952a49fb63ac8de9c1e0fb22ddd4020e"],["images/kamarupa-low.jpg","e19d4ad9c454824aaf7af83e6872a527"],["images/kamarupa.jpg","882dcb871f76eb032c83c0deff2742d2"],["images/laurelandhardy.jpg","28a2579392e0b0d1bf3499b7a7373ca7"],["images/megasporangiate-sketch.jpg","d8ff155e17781ba58f712407a7736f6a"],["images/megasporangiate-strobili-1.jpg","414a1d24021b1513e959e4aec5027dbc"],["images/megasporangiate-strobili-cone.jpg","d4d0f638117185807ed294918f1d9f2e"],["images/megasporangiate-strobili-installation.jpg","67fbff5e829f63f9d74282273d66b795"],["images/megasporangiate-strobili-installation2.jpg","309df21adea50155072b019414687830"],["images/megasporangiate-strobili-installation3.jpg","573e610cd114789024320ca164390577"],["images/meso-low.jpg","0095ad8c1a2df1630369a9844c99fef2"],["images/meso.jpg","43f1fb77c7ae34c625bf39d459be100e"],["images/musicfalls.jpg","f3bf1a37bcfda13e8a8e084d3aae108b"],["images/park-meter1.jpg","a6bc434a5e3dd67bb7c7ea21b1099aeb"],["images/park-meter2.jpg","77c2c261dc02a7c4f6ce9df5a2eec473"],["images/park-meter3.jpg","f5b27de6313d9710ed7c87319020eaae"],["images/parkmeter-low.jpg","056dc1f64d6a4c25304dba7176619c3f"],["images/parkmeter.jpg","8e4a20815873034e38813cb8a7084ea3"],["images/portrait-thumb.jpg","bf1aa0e4fc6d54115419e417c63aa5cf"],["images/redmoves.jpg","02056a0d97af1d6d83dcb29ec2613fc8"],["images/run-low.jpg","274941f19670badffaf0aa33dbaf612b"],["images/run-screencap-01.jpg","0282b02157ac882d1e7fac2eee31283f"],["images/run-screencap-02.jpg","e009d81cb739eb0d4f0b9924708050af"],["images/run-screencap-03.jpg","f45a435432c6218a9dbac6acb0e92284"],["images/run-screencap-05.jpg","473ab8133c90c7eb501f9e8411845b20"],["images/run-screencap-06.jpg","a2cba4fb2e662b4a337070b1c7c180bb"],["images/run-screencap-07.jpg","e74c87660411e19c27f3bf2a00503d7c"],["images/run-screencap-08.jpg","a1ffe7635c15dbf5573638d4c1e61bd2"],["images/run-screencap-09.jpg","faefefea4bea7e6e920973252c12d5b4"],["images/run-screencap-10.jpg","618bd7428b9c1891e33e39c0afb2fa32"],["images/run-screencap-11.jpg","e7c8d4bd8d92fec83d24138811a2129f"],["images/run-screencap-12.jpg","d1994f51b9bd475a1d9ee0241e3f4b6c"],["images/run-screencap-13.jpg","84082dace038f30f1586790fe9a0eda5"],["images/run-screencap-14.jpg","3274f35254aa3425607109b59f7b83fb"],["images/run-screencap-15.jpg","85c8de5e051561bdcd7bd11b30bf9b3a"],["images/run-screencap-16.jpg","121f5823027fa856b5aeb9fd67b25b5e"],["images/run-screencap-18.jpg","fe9acb34c630d979e4e51d034a2b8183"],["images/run.jpg","822b80903f4315932c5f13510188643a"],["images/seahear-01.jpg","787b456fdd95fdd24f7dadbd384e89ca"],["images/seahear-02.jpg","04e32e8ca1586168f6f6ee831909698f"],["images/seahear-03.jpg","8136918f63e2f8c6f1586a5f211d82b0"],["images/seahear-04.jpg","28db097301cecd59e4692076f890b240"],["images/seahear-low.jpg","7e30be597cb2d960e54bb2d7d19574e0"],["images/seahear.jpg","58eccf7137dd2a981316e99320cb8c0e"],["images/shadow-low.jpg","9bc66a323ca1370940a20e6ded6ed675"],["images/shadow.jpg","128b3e64aca9b5b254917cbb8fbbd26e"],["images/shadowme-low.jpg","f676de655302b02bef1dd9c3494a6236"],["images/shadowme.jpg","b39089bf10caef06345e45387fedc4a2"],["images/shar-01.jpg","b388d606e2bfc8cdaa5bb9f21175426b"],["images/shar-02.jpg","ee5a35f8182bebbafe3a91294eda7557"],["images/shar-03.jpg","f0c53cb258c2640ef643856866151199"],["images/shar-04.jpg","5590eaad377e677520f2639ebb381373"],["images/shar-05.jpg","8ee33e10acd4ed5d31b13cd010defaef"],["images/shr.jpg","99311e9fba75d4cb758573d3f724dd19"],["images/sketch-01.jpg","088378316f46acb844d9a81ea113b989"],["images/sketch-02.jpg","ed7186d2fafb988d592939d038e47339"],["images/sketch-03.jpg","83952c28615bb76e068179140bb7bfc1"],["images/sketch-04.jpg","eecec338d52a6570074048ccbf87cd38"],["images/sketch-05.jpg","91ee8596cdbeaf3e6ed1d9835c4af04d"],["images/sketch-06.jpg","11e8c982c5a442db562ea9fb608adbb7"],["images/sketch-07.jpg","3971958686f4feb88bf152c78548905c"],["images/sketch-08.jpg","2057108ea177502a1b6d2a4280f3b5ad"],["images/sketch-09.jpg","33eb4aa60193726f00c9481cde671a58"],["images/sketch-10.jpg","3406c085d02e64349af57e94f145f8e7"],["images/sketch-11.jpg","88a18a0eb1add4b1f16f72146b5d2d75"],["images/sketch-12.jpg","6a2ec33a489bfaadb581c28681225be7"],["images/sketch-13.jpg","121469001993ebaa67a2a53c166741fa"],["images/sketch-14.jpg","29b4dab65a1f6de93fb93be158f1b960"],["images/sketch-15.jpg","dc72ba9f0e244e49d9f787e260e0373a"],["images/sketch-16.jpg","c54b54498f6bbf9e10999dcddca16e61"],["images/sketch-17.jpg","adab324ff86e5f00a41fe43889e2e466"],["images/sketch-18.jpg","69dc338f5fc6a06b7a8a8d2f283722d1"],["images/sketch-19.jpg","d503e3e61390a5a3f3cc4b5beae4fd5e"],["images/springfalls.jpg","6a09712f4c0e2f94af622b2b7f6e614b"],["images/takingwithhim.jpg","1a29fc2096c15e7a802cbd413ef86cff"],["images/touch/apple-touch-icon.png","54ce74b6af30c7c9824d72bfcdd8aa96"],["images/touch/chrome-touch-icon-192x192.png","eee87651c500001cce67b5538658340c"],["images/touch/icon-128x128.png","48ac9d68d6d9d7eb2ef57d53fb0a3daa"],["images/touch/ms-touch-icon-144x144-precomposed.png","02db2b78af538048f3d4c78dd00fbc4d"],["images/transportermix-01.jpg","d37d883bdf0d3683ccf8bcf32a9ef4e8"],["images/transportermix-02.jpg","6c4aed007c44c74894fd0455fe2002f0"],["images/transportermix-03.jpg","0b2b8e8b1fada7c531cdd00e4f6ae47e"],["images/transportermix-04.jpg","234c1ef81bb487e63f28989db757a752"],["images/transportermix-06.jpg","5939036a4a23e5b76c252b6cad3690b7"],["images/transportermix-07.jpg","7d164e8665122685ddf9671fe9643160"],["images/transportermix-08.jpg","fd4929cb20c35729adda971f334995a6"],["images/transportermix-low.jpg","f901f2b442170e605263fd82725185d3"],["images/transportermix.jpg","5e2c967e16fd53b4847a542cd1249a8e"],["images/transportermixgraphic.jpg","0ddd293a7e2e298a049f44fd9748ac32"],["images/veil-rises.jpg","4dc644231a71dae64b503db7f83ead52"],["images/winterrose.jpg","7a6f962ba835660b8e0fa480635283b4"],["index.html","2e1951505ac812fa2d36cb248bccf703"],["manifest.json","053275422ffdb4c2b0c46d85fb595311"],["pinterest-90dd5.html","82fb51384bd6d61c1a9df084f6ea899b"],["scripts/main.min.js","089020ce2683e9b5b67d23d12a7e0a30"],["sketches.html","d71ba6fa363ce5d7b9274660d4179234"],["styles/components/components.css","b37ddeb28a181e96a16e3d20309d6ed3"],["styles/main.css","802bd003ceecb5bd22d41e8d7639ddc5"]];
var CacheNamePrefix = 'sw-precache-v1-web-starter-kit-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var populateCurrentCacheNames = function (precacheConfig, cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl, ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  event.waitUntil(
    caches.keys().then(function(allCacheNames) {
      return Promise.all(
        Object.keys(CurrentCacheNamesToAbsoluteUrl).filter(function(cacheName) {
          return allCacheNames.indexOf(cacheName) == -1;
        }).map(function(cacheName) {
          var url = new URL(CurrentCacheNamesToAbsoluteUrl[cacheName]);
          // Put in a cache-busting parameter to ensure we're caching a fresh response.
          if (url.search) {
            url.search += '&';
          }
          url.search += 'sw-precache=' + now;
          var urlWithCacheBusting = url.toString();

          console.log('Adding URL "%s" to cache named "%s"', urlWithCacheBusting, cacheName);
          return caches.open(cacheName).then(function(cache) {
            var request = new Request(urlWithCacheBusting, {credentials: 'same-origin'});
            return fetch(request.clone()).then(function(response) {
              if (response.status == 200) {
                return cache.put(request, response);
              } else {
                console.error('Request for %s returned a response with status %d, so not attempting to cache it.',
                  urlWithCacheBusting, response.status);
                // Get rid of the empty cache if we can't add a successful response to it.
                return caches.delete(cacheName);
              }
            });
          });
        })
      ).then(function() {
        return Promise.all(
          allCacheNames.filter(function(cacheName) {
            return cacheName.indexOf(CacheNamePrefix) == 0 &&
                   !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            console.log('Deleting out-of-date cache "%s"', cacheName);
            return caches.delete(cacheName);
          })
        )
      });
    }).then(function() {
      if (typeof self.skipWaiting == 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim == 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command == 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method == 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    if (cacheName) {
      event.respondWith(
        // We can't call cache.match(event.request) since the entry in the cache will contain the
        // cache-busting parameter. Instead, rely on the fact that each cache should only have one
        // entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              return response || fetch(event.request).catch(function(e) {
                console.error('Fetch for "%s" failed: %O', urlWithoutIgnoredParameters, e);
              });
            });
          });
        }).catch(function(e) {
          console.error('Couldn\'t serve response for "%s" from cache: %O', urlWithoutIgnoredParameters, e);
          return fetch(event.request);
        })
      );
    }
  }
});

