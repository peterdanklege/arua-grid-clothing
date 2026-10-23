import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Search, 
  X, 
  Plus, 
  Minus, 
  ArrowRight, 
  ChevronDown, 
  ShieldCheck, 
  RefreshCw, 
  Leaf, 
  Sliders 
} from 'lucide-react';

 Fictional Curated Products List
const PRODUCTS = [
  {
    id 'p1',
    name 'MODULAR CARGO PANT',
    price 185,
    category 'Pants',
    material '100% Recycled Technical Nylon',
    image 'httpsimages.unsplash.comphoto-1517462964-21fdcec3f25bauto=format&fit=crop&w=800&q=80',
    altImage 'httpsimages.unsplash.comphoto-1509551388413-e18d0ac5d495auto=format&fit=crop&w=800&q=80',
    description 'Weather-resistant modular construction, detach-and-adapt storage, and double-reinforced knee framing tailored for ergonomic urban transit.',
    sizes ['S', 'M', 'L', 'XL'],
    stock { S 2, M 5, L 0, XL 3 },
    specs '6 pocket configuration, YKK AquaGuard water-resistant zips, adjustable drawstring cuffs.',
    care 'Machine wash cold on delicate, air dry to preserve performance coating.'
  },
  {
    id 'p2',
    name 'ASYMMETRIC WINDBREAKER',
    price 240,
    category 'Outerwear',
    material 'Waterproof Membrane Nylon & Ocean Plastics',
    image 'httpsimages.unsplash.comphoto-1548883354-7622d03aca27auto=format&fit=crop&w=800&q=80',
    altImage 'httpsimages.unsplash.comphoto-1544441893-675973e31985auto=format&fit=crop&w=800&q=80',
    description 'Optimal defense shield against shifting micro-climates. Accented with our signature off-center dynamic zipper glide and underarm ventilation panels.',
    sizes ['S', 'M', 'L'],
    stock { S 1, M 0, L 4 },
    specs '15,000mm hydrostatic head rating, concealed packable storm hood, taped seams.',
    care 'Wipe clean with a damp cloth or professional cycle.'
  },
  {
    id 'p3',
    name 'MERINO RIBBED BEANIE',
    price 65,
    category 'Accessories',
    material '100% Extra-Fine Merino Wool',
    image 'httpsimages.unsplash.comphoto-1576871337622-98d48d435350auto=format&fit=crop&w=800&q=80',
    altImage 'httpsimages.unsplash.comphoto-1608889174619-41fe495bb68cauto=format&fit=crop&w=800&q=80',
    description 'Super-soft thermo-regulating luxury rib knit with high-retention elasticity and a structured, clean double-layered cuff profile.',
    sizes ['OS'],
    stock { 'OS' 8 },
    specs 'Engineered crown styling, woven brand signature tag sewn into interior hem.',
    care 'Dry flat, hand wash warm only with specialized wool detergent.'
  },
  {
    id 'p4',
    name 'THERMAL BASE-LAYER',
    price 110,
    category 'Tops',
    material '85% GOTS Organic Cotton, 15% Recycled Elastane',
    image 'httpsimages.unsplash.comphoto-1618354691373-d851c5c3a990auto=format&fit=crop&w=800&q=80',
    altImage 'httpsimages.unsplash.comphoto-1521572267360-ee0c2909d518auto=format&fit=crop&w=800&q=80',
    description 'Sculpted form-fitting thermal base designed to match the body's natural heat patterns. Breathable mesh mapping zones woven along stress areas.',
    sizes ['S', 'M', 'L', 'XL'],
    stock { S 4, M 6, L 2, XL 0 },
    specs 'Advanced anti-microbial finish, ultra-flat friction-less coverstitch seams.',
    care 'Wash cold inside out. Do not use softeners.'
  }
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [selectedSize, setSelectedSize] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAccordionOpen, setIsAccordionOpen] = useState({ specs true, care false });
  const [addedPopup, setAddedPopup] = useState(false);

   Cart operations
  const addToCart = (product, size) = {
    if (!size) {
      alert('Please select a size first.');
      return;
    }
    const existingIndex = cart.findIndex(item = item.product.id === product.id && item.size === size);
    if (existingIndex  -1) {
      const newCart = [...cart];
      newCart[existingIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { product, size, quantity 1 }]);
    }
    setAddedPopup(true);
    setTimeout(() = setAddedPopup(false), 2000);
  };

  const updateQuantity = (index, delta) = {
    const newCart = [...cart];
    newCart[index].quantity += delta;
    if (newCart[index].quantity = 0) {
      newCart.splice(index, 1);
    }
    setCart(newCart);
  };

  const cartTotal = cart.reduce((acc, item) = acc + (item.product.price  item.quantity), 0);
  const cartItemCount = cart.reduce((acc, item) = acc + item.quantity, 0);

  return (
    div className=min-h-screen bg-[#F5F5F7] text-[#0A0A0A] font-sans antialiased selectionbg-[#FF3B30] selectiontext-white
      
      { Search overlay slider }
      {searchOpen && (
        div className=fixed inset-0 bg-[#0A0A0A]80 backdrop-blur-md z-50 flex items-start justify-center pt-24 transition-opacity duration-300
          div className=bg-[#0A0A0A] border border-[#1C1C1E] w-full max-w-2xl mx-4 p-8 text-white relative
            button onClick={() = setSearchOpen(false)} className=absolute top-6 right-6 text-gray-400 hovertext-white transition
              X size={20} 
            button
            h3 className=font-mono text-xs uppercase text-gray-400 tracking-widest mb-4ARCHIVE SEARCH SYSTEMh3
            input 
              type=text 
              placeholder=ENTER COMPONENT NAME OR SPECIFICATION... 
              className=w-full bg-transparent border-b border-gray-700 py-3 text-xl focusoutline-none focusborder-[#FF3B30] font-mono transition-all text-white
              value={searchQuery}
              onChange={(e) = setSearchQuery(e.target.value)}
              autoFocus
            
            div className=mt-6 flex flex-wrap gap-2
              span className=text-xs bg-[#1C1C1E] px-3 py-1 font-mono text-gray-300 cursor-pointer hoverbg-neutral-800 onClick={() = setSearchQuery('Outerwear')}[Outerwear]span
              span className=text-xs bg-[#1C1C1E] px-3 py-1 font-mono text-gray-300 cursor-pointer hoverbg-neutral-800 onClick={() = setSearchQuery('Nylon')}[Nylon]span
              span className=text-xs bg-[#1C1C1E] px-3 py-1 font-mono text-gray-300 cursor-pointer hoverbg-neutral-800 onClick={() = setSearchQuery('Merino')}[Merino]span
            div
          div
        div
      )}

      { Cart Drawer }
      div className={`fixed inset-y-0 right-0 w-full mdmax-w-md bg-[#0A0A0A] text-white z-50 shadow-2xl transform transition-transform duration-500 ease-out flex flex-col ${isCartOpen  'translate-x-0'  'translate-x-full'}`}
        div className=p-6 border-b border-neutral-800 flex justify-between items-center
          div className=flex items-center gap-3
            ShoppingBag size={18} className=text-[#FF3B30] 
            span className=font-mono text-sm tracking-wider uppercaseGRID CART ({cartItemCount})span
          div
          button onClick={() = setIsCartOpen(false)} className=hoverrotate-90 duration-200 transition
            X size={20} 
          button
        div

        div className=flex-1 overflow-y-auto p-6 space-y-6
          {cart.length === 0  (
            div className=h-full flex flex-col items-center justify-center space-y-4
              p className=font-mono text-xs text-neutral-400 uppercase tracking-widestCart holds 0 componentsp
              button 
                onClick={() = setIsCartOpen(false)}
                className=text-xs bg-white text-black py-3 px-6 hoverbg-[#FF3B30] hovertext-white transition duration-300 font-mono tracking-widest
              
                RETURN TO TRANSMISSION
              button
            div
          )  (
            cart.map((item, idx) = (
              div key={idx} className=flex gap-4 border-b border-neutral-900 pb-6 lastborder-0
                img src={item.product.image} alt={item.product.name} className=w-20 h-24 object-cover filter brightness-90 border border-neutral-800 
                div className=flex-1 flex flex-col justify-between
                  div
                    h4 className=font-mono text-xs uppercase tracking-wider font-semibold{item.product.name}h4
                    p className=text-xs text-neutral-400 mt-1SIZE {item.size}p
                    p className=font-mono text-xs text-[#FF3B30] mt-1${item.product.price} USDp
                  div
                  div className=flex items-center justify-between mt-2
                    div className=flex items-center border border-neutral-800
                      button onClick={() = updateQuantity(idx, -1)} className=p-1 px-2.5 hoverbg-neutral-900 transition text-gray-400Minus size={12} button
                      span className=px-3 font-mono text-xs{item.quantity}span
                      button onClick={() = updateQuantity(idx, 1)} className=p-1 px-2.5 hoverbg-neutral-900 transition text-gray-400Plus size={12} button
                    div
                  div
                div
              div
            ))
          )}
        div

        {cart.length  0 && (
          div className=p-6 border-t border-neutral-800 bg-[#0F0F11]
            div className=flex justify-between font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2
              spanESTIMATED SHIPPINGspan
              span className=text-whiteFREEspan
            div
            div className=flex justify-between font-mono text-sm uppercase tracking-widest mb-6
              spanESTIMATED SYSTEM TOTALspan
              span className=text-[#FF3B30]${cartTotal} USDspan
            div
            button 
              onClick={() = alert('Grid checkout routine initiating... Done.')} 
              className=w-full bg-[#FF3B30] text-white py-4 font-mono text-xs uppercase tracking-widest hoverbg-white hovertext-black transition-all duration-300 flex items-center justify-center gap-2
            
              PROCEED TO TRANSMIT PAYMENT ArrowRight size={14} 
            button
          div
        )}
      div

      { Dynamic Action Overlay Trigger notification }
      {addedPopup && (
        div className=fixed bottom-6 right-6 bg-[#0A0A0A] border border-[#FF3B30] text-white px-6 py-4 z-40 font-mono text-xs flex items-center gap-3 animate-fade-in shadow-xl
          span className=inline-block w-2.5 h-2.5 bg-[#FF3B30] rounded-full animate-pulsespan
          COMPONENT REGISTERED TO GRID BAG
        div
      )}

      { Sticky Header }
      header className=sticky top-0 bg-[#F5F5F7]85 backdrop-blur-md border-b border-neutral-200 z-40 transition-all duration-300
        div className=max-w-7xl mx-auto px-6 h-16 flex items-center justify-between
          div className=flex items-center gap-12
            a href=# className=font-mono font-bold tracking-[0.3em] text-lg text-black hovertext-[#FF3B30] duration-300
              AURA GRID
            a
            nav className=hidden mdflex items-center space-x-8 font-mono text-xs tracking-widest uppercase text-neutral-500
              a href=#collection className=hovertext-black transitionCOLLECTIONa
              a href=#product-view className=hovertext-black transitionCONFIGURATORa
              a href=# className=hovertext-black transitionJOURNALa
              a href=# className=hovertext-black transition text-[#FF3B30] font-semibold[DROP 02]a
            nav
          div

          div className=flex items-center space-x-6
            button onClick={() = setSearchOpen(true)} className=hovertext-[#FF3B30] transition flex items-center gap-1
              Search size={18} 
            button
            button onClick={() = setIsCartOpen(true)} className=hovertext-[#FF3B30] transition relative flex items-center
              ShoppingBag size={18} 
              {cartItemCount  0 && (
                span className=absolute -top-1.5 -right-2 bg-[#FF3B30] text-white font-mono text-[9px] w-4 h-4 rounded-full flex items-center justify-center
                  {cartItemCount}
                span
              )}
            button
          div
        div
      header

      { Page 1 Hero Section }
      section className=min-h-[calc(100vh-4rem)] border-b border-neutral-200 grid grid-cols-1 lggrid-cols-12 overflow-hidden
        { Left Column Tyopography & Concept }
        div className=lgcol-span-7 p-8 mdp-16 flex flex-col justify-between bg-white
          div className=font-mono text-xs tracking-widest text-[#FF3B30] uppercase mb-12 flex items-center gap-2
            span className=inline-block w-2 h-2 bg-[#FF3B30]span SYSTEM OUTLINE SECTOR DROP 01
          div
          
          div className=my-auto space-y-8
            h1 className=text-5xl mdtext-7xl lgtext-8xl font-black tracking-tighter leading-none text-black
              FUNCTION br OVER FORM.br 
              span className=text-neutral-400FORM OVERspanbr 
              NOTHING.
            h1
            p className=text-sm mdtext-base text-neutral-600 font-mono tracking-tight max-w-lg leading-relaxed
              We engineer garments that endure the shifting patterns of urban evolution. Crafted from organic textiles, modular zero-waste layouts, and extreme weather membranes.
            p
            div className=pt-4 flex flex-col smflex-row gap-4
              a 
                href=#collection 
                className=inline-flex items-center justify-center bg-black hoverbg-[#FF3B30] text-white px-8 py-4 text-xs font-mono uppercase tracking-widest transition duration-500
              
                EXPLORE CURRENT MODULES ArrowRight size={14} className=ml-2 
              a
              a 
                href=#product-view 
                className=inline-flex items-center justify-center border border-neutral-300 hoverborder-black text-black px-8 py-4 text-xs font-mono uppercase tracking-widest transition duration-500
              
                QUICK SPEC CONFIG
              a
            div
          div

          div className=mt-16 border-t border-neutral-100 pt-8 grid grid-cols-3 gap-4 font-mono text-[10px] tracking-wider text-neutral-400
            div
              span className=text-black font-semibold block mb-101  INTEGRITYspan
              GOTS-CERTIFIED RAW BASE
            div
            div
              span className=text-black font-semibold block mb-102  MODIFIEDspan
              MODULAR ZIP ADJUSTERS
            div
            div
              span className=text-black font-semibold block mb-103  CYCLICALspan
              LIFETIME REPAIR BACKING
            div
          div
        div

        { Right Column Hero High Contrast Interactive Product Placeholder }
        div className=lgcol-span-5 relative bg-neutral-900 group overflow-hidden flex items-center justify-center min-h-[400px] lgmin-h-0
          div className=absolute inset-0 bg-gradient-to-t from-black80 to-transparent z-10 
          img 
            src=httpsimages.unsplash.comphoto-1544441893-675973e31985auto=format&fit=crop&w=1200&q=80 
            alt=Hero Streetwear Model Layered Technical Setup 
            className=absolute inset-0 w-full h-full object-cover filter contrast-125 grayscale brightness-75 transition-transform duration-1000 group-hoverscale-105
          
          div className=relative z-20 text-white p-8 text-left mt-auto w-full
            span className=font-mono text-xs uppercase tracking-widest text-[#FF3B30] bg-[#FF3B30]10 px-2.5 py-1 border border-[#FF3B30]30 inline-block mb-4PRE-DROP INTELspan
            h2 className=text-2xl mdtext-3xl font-bold tracking-tight mb-2ASYMMETRIC WINDBREAKER GEN.2h2
            p className=font-mono text-xs text-neutral-400 max-w-smOptimized dynamic posture stitching, waterproof taped seam mechanics.p
            button 
              onClick={() = {
                const windbreaker = PRODUCTS.find(p = p.id === 'p2');
                setSelectedProduct(windbreaker);
                document.getElementById('product-view').scrollIntoView({ behavior 'smooth' });
              }}
              className=mt-4 font-mono text-xs underline decoration-[#FF3B30] underline-offset-4 text-white hovertext-[#FF3B30] transition-colors
            
              INSPECT MODULE SPECS
            button
          div
        div
      section

      { Featured Curated Products Grid }
      section id=collection className=max-w-7xl mx-auto px-6 py-20 mdpy-32
        div className=flex flex-col mdflex-row mditems-end justify-between mb-16 border-b border-neutral-200 pb-8
          div
            span className=font-mono text-xs text-neutral-400 block mb-2 CATALOG SYSTEM INDEXspan
            h2 className=text-3xl mdtext-5xl font-black uppercase tracking-tight text-blackMODULAR REPERTOIREh2
          div
          div className=mt-4 mdmt-0 flex gap-4 font-mono text-xs
            span className=text-[#FF3B30] font-bold underline underline-offset-4[ ALL GENERATIONS ]span
            span className=text-neutral-400 hovertext-black transition cursor-pointer[ SHELLS ]span
            span className=text-neutral-400 hovertext-black transition cursor-pointer[ COMPLEMENTS ]span
          div
        div

        div className=grid grid-cols-1 smgrid-cols-2 lggrid-cols-4 gap-x-6 gap-y-12
          {PRODUCTS.map((prod) = (
            div key={prod.id} className=group relative flex flex-col bg-white border border-neutral-100 hoverborder-neutral-300 transition duration-300 p-4
              div 
                className=w-full h-96 overflow-hidden relative bg-[#F5F5F7] cursor-pointer
                onClick={() = {
                  setSelectedProduct(prod);
                  setSelectedSize('');
                  document.getElementById('product-view').scrollIntoView({ behavior 'smooth' });
                }}
              
                img 
                  src={prod.image} 
                  alt={prod.name} 
                  className=w-full h-full object-cover transition-transform duration-700 group-hoverscale-105
                
                img 
                  src={prod.altImage} 
                  alt={prod.name} 
                  className=w-full h-full object-cover absolute inset-0 opacity-0 group-hoveropacity-100 transition-opacity duration-500
                
                span className=absolute top-3 left-3 bg-black text-white font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 z-10
                  {prod.category}
                span
              div

              div className=mt-6 flex-1 flex flex-col justify-between
                div
                  div className=flex justify-between items-start mb-2
                    h3 className=font-mono text-xs font-semibold tracking-wider text-neutral-800 uppercase{prod.name}h3
                    span className=font-mono text-xs font-bold text-[#FF3B30]${prod.price}span
                  div
                  p className=text-[11px] text-neutral-400 font-mono tracking-tight line-clamp-2{prod.description}p
                div
                
                div className=mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between
                  span className=font-mono text-[9px] text-[#FF3B30] uppercase tracking-widest{prod.material}span
                  button 
                    onClick={() = {
                      setSelectedProduct(prod);
                      setSelectedSize(prod.sizes[0]);
                      document.getElementById('product-view').scrollIntoView({ behavior 'smooth' });
                    }}
                    className=text-xs bg-black text-white px-3 py-2 font-mono hoverbg-[#FF3B30] transition duration-300 uppercase tracking-widest text-[10px]
                  
                    CONFIG
                  button
                div
              div
            div
          ))}
        div
      section

      { Interactive PDP Component Section (Configurator) }
      section id=product-view className=bg-white border-t border-neutral-200 py-20 mdpy-32
        div className=max-w-7xl mx-auto px-6
          div className=grid grid-cols-1 lggrid-cols-12 gap-12 lggap-20
            
            { Gallery Block }
            div className=lgcol-span-7 space-y-4
              div className=border border-neutral-200 bg-[#F5F5F7] overflow-hidden
                img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className=w-full h-[600px] object-cover transition-all duration-700 
                
              div
              div className=grid grid-cols-2 gap-4
                div className=border border-neutral-200 overflow-hidden h-[300px]
                  img src={selectedProduct.altImage} alt=Structural detailing angle className=w-full h-full object-cover 
                div
                div className=bg-[#0A0A0A] p-8 text-white flex flex-col justify-between h-[300px]
                  div className=font-mono space-y-1
                    span className=text-[#FF3B30] text-[10px] uppercase tracking-widest block font-bold TECH SPEC OVERVIEWspan
                    p className=text-xs text-neutral-400 leading-relaxed{selectedProduct.specs}p
                  div
                  div className=border-t border-neutral-800 pt-4 flex gap-4 text-xs font-mono
                    div
                      span className=block text-[9px] text-neutral-500CARBON FOOTPRINTspan
                      span className=text-[#FF3B30] font-boldREDUCED 38%span
                    div
                    div
                      span className=block text-[9px] text-neutral-500ORIGINspan
                      spanPORTUGAL ASSEMBLYspan
                    div
                  div
                div
              div
            div

            { Config & Buy Block }
            div className=lgcol-span-5 flex flex-col justify-between
              div
                nav className=font-mono text-[10px] tracking-widest text-neutral-400 uppercase mb-6 flex gap-2
                  spanCATALOGspan  span{selectedProduct.category}span  span className=text-black font-bold{selectedProduct.name}span
                nav

                h1 className=text-3xl mdtext-5xl font-black uppercase tracking-tight text-neutral-900 mb-2{selectedProduct.name}h1
                p className=font-mono text-xl text-[#FF3B30] font-bold mb-6${selectedProduct.price} USDp

                p className=text-sm text-neutral-600 leading-relaxed mb-8{selectedProduct.description}p

                div className=border-y border-neutral-200 py-6 space-y-4 mb-8
                  div className=flex justify-between items-center text-xs font-mono
                    span className=text-neutral-500 uppercase tracking-widestSIZE SPECIFICATIONspan
                    span className=text-black font-semibold uppercase tracking-widest underline cursor-pointer hovertext-[#FF3B30]SIZE CHART GUIDEspan
                  div
                  
                  { Interactive Size Multi-Selector }
                  div className=flex gap-2
                    {selectedProduct.sizes.map((size) = {
                      const isOutOfStock = selectedProduct.stock[size] === 0;
                      return (
                        button
                          key={size}
                          disabled={isOutOfStock}
                          onClick={() = setSelectedSize(size)}
                          className={`flex-1 border py-3 text-xs font-mono transition duration-200 flex flex-col items-center justify-center relative ${
                            isOutOfStock 
                               'bg-neutral-100 border-neutral-200 text-neutral-300 cursor-not-allowed line-through' 
                               selectedSize === size 
                                 'bg-black text-white border-black' 
                                 'bg-white border-neutral-300 text-black hoverborder-black'
                          }`}
                        
                          span{size}span
                          {selectedProduct.stock[size]  0 && selectedProduct.stock[size] = 2 && (
                            span className=absolute top-1 text-[8px] text-[#FF3B30] font-boldLAST {selectedProduct.stock[size]}span
                          )}
                        button
                      );
                    })}
                  div
                div

                { Primary Add to Cart Call-to-Action }
                button
                  onClick={() = addToCart(selectedProduct, selectedSize)}
                  className=w-full bg-[#0A0A0A] hoverbg-[#FF3B30] text-white py-5 font-mono text-xs uppercase tracking-widest transition duration-500 flex items-center justify-center gap-3
                
                  ADD SPEC COMPONENT TO BAG Plus size={16} 
                button

                { Micro-accordions }
                div className=mt-8 space-y-4
                  div className=border-b border-neutral-200 pb-4
                    button 
                      onClick={() = setIsAccordionOpen(prev = ({ ...prev, specs !prev.specs }))}
                      className=w-full flex justify-between items-center text-xs font-mono uppercase tracking-widest text-black hovertext-[#FF3B30]
                    
                      spanMATERIAL & REPAIR COMPLIANCEspan
                      ChevronDown size={14} className={`transform transition-transform ${isAccordionOpen.specs  'rotate-180'  ''}`} 
                    button
                    {isAccordionOpen.specs && (
                      p className=mt-3 text-xs text-neutral-500 font-mono leading-relaxed bg-[#F5F5F7] p-4 border border-neutral-100
                        {selectedProduct.material}. Under our Cyclical System policy, this product enjoys a lifetime repair and upgrade warranty at any certified regional hub.
                      p
                    )}
                  div

                  div className=border-b border-neutral-200 pb-4
                    button 
                      onClick={() = setIsAccordionOpen(prev = ({ ...prev, care !prev.care }))}
                      className=w-full flex justify-between items-center text-xs font-mono uppercase tracking-widest text-black hovertext-[#FF3B30]
                    
                      spanCARE SYSTEM ROUTINEspan
                      ChevronDown size={14} className={`transform transition-transform ${isAccordionOpen.care  'rotate-180'  ''}`} 
                    button
                    {isAccordionOpen.care && (
                      p className=mt-3 text-xs text-neutral-500 font-mono leading-relaxed bg-[#F5F5F7] p-4 border border-neutral-100
                        {selectedProduct.care}
                      p
                    )}
                  div
                div
              div

              { Badges footer }
              div className=mt-12 pt-8 border-t border-neutral-200 grid grid-cols-3 gap-4 text-center
                div className=flex flex-col items-center
                  Leaf size={18} className=text-[#FF3B30] mb-2 
                  span className=font-mono text-[9px] uppercase tracking-wider block font-bold text-neutral-700ORGANIC LABELEDspan
                div
                div className=flex flex-col items-center
                  RefreshCw size={18} className=text-[#FF3B30] mb-2 
                  span className=font-mono text-[9px] uppercase tracking-wider block font-bold text-neutral-700100% RECYCLABLEspan
                div
                div className=flex flex-col items-center
                  ShieldCheck size={18} className=text-[#FF3B30] mb-2 
                  span className=font-mono text-[9px] uppercase tracking-wider block font-bold text-neutral-700WINDPROOF SYSTEMspan
                div
              div
            div

          div
        div
      section

      { Sustainable Grid Manifest Block }
      section className=bg-[#0A0A0A] text-white py-24 border-t border-neutral-900
        div className=max-w-7xl mx-auto px-6 grid grid-cols-1 lggrid-cols-12 gap-12 items-center
          div className=lgcol-span-8
            span className=text-[#FF3B30] font-mono text-xs uppercase tracking-widest block mb-4 BRAND INTEGRITY MANIFESTspan
            p className=text-3xl mdtext-5xl lgtext-6xl font-black uppercase tracking-tight leading-tight
              COMMITTED TO ZERO WASTE STRETCHING AND FULL CYCLICAL CIRCULARITY.
            p
          div
          div className=lgcol-span-4 space-y-6
            p className=text-neutral-400 text-sm font-mono leading-relaxed
              We reject high-frequency collections. We produce limited hardware drops optimized strictly with technical patterns ensuring 99.4% textile utilization with raw organic yarns.
            p
            div className=border-t border-neutral-800 pt-6
              a href=# className=font-mono text-xs text-white hovertext-[#FF3B30] tracking-widest uppercase inline-flex items-center gap-2 transition duration-300
                READ OUR CRADLE-TO-CRADLE BLUEPRINT ArrowRight size={14} 
              a
            div
          div
        div
      section

      { Footer }
      footer className=bg-white border-t border-neutral-200 py-16
        div className=max-w-7xl mx-auto px-6 grid grid-cols-1 mdgrid-cols-4 gap-12 font-mono text-xs text-neutral-500
          div className=space-y-4
            span className=font-bold tracking-[0.3em] text-black text-sm uppercaseAURA GRIDspan
            p className=text-[11px] leading-relaxed
              Systemized gear for technical exploration. Built for durable resilience and dynamic modular adjustment.
            p
            p className=text-[10px] text-neutral-400©{new Date().getFullYear()} AURA GRID APPARATUS INC. ALL SCHEMES SECURED.p
          div
          div
            span className=text-black font-semibold block mb-4SYSTEM INDEXspan
            ul className=space-y-2
              lia href=# className=hovertext-black transitionDROP 01 CONFIGURATIONali
              lia href=# className=hovertext-black transitionCORE PRODUCTSali
              lia href=# className=hovertext-black transitionLABORATORY EXPERIMENTali
              lia href=# className=hovertext-black transitionCYCLIC RETURNSali
            ul
          div
          div
            span className=text-black font-semibold block mb-4COMPLIANCE HUBspan
            ul className=space-y-2
              lia href=# className=hovertext-black transitionMATERIAL TRACEABILITYali
              lia href=# className=hovertext-black transitionSHIPPING EMISSIONSali
              lia href=# className=hovertext-black transitionLOCAL REPAIR HUBSali
            ul
          div
          div
            span className=text-[#FF3B30] font-semibold block mb-4[ TRANSMISSION NETWORK ]span
            p className=text-[11px] mb-4Subscribe to unlock drop schedules and telemetry logs.p
            div className=flex
              input 
                type=email 
                placeholder=ADDRESS... 
                className=bg-[#F5F5F7] border border-neutral-300 px-3 py-2 text-black text-[11px] focusoutline-none focusborder-[#FF3B30] flex-1 
              
              button className=bg-black hoverbg-[#FF3B30] text-white px-4 transition duration-300 font-bold→button
            div
          div
        div
      footer

    div
  );
}