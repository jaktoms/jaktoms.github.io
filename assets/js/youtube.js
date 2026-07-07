document.addEventListener("DOMContentLoaded", function () {
  const youtubeVideos = [
    {
      title: "Govt നയപ്രഖ്യാപനത്തിൽ 'Smart Meter & Grid' എവിടെ? | സോളാറുകാരെ ചതിച്ചോ? | V2G | Energy Credit",
      id: "vy9kga-XJi4",
      category: "solar",
      desc: "വി.ഡി. സതീശൻ സർക്കാരിന്റെ കന്നി നയപ്രഖ്യാപന പ്രസംഗത്തിൽ 'Smart Meter & Grid' എവിടെ? സോളാർ പ്രൊസ്യൂമർമാരെ ഇത് എങ്ങനെ ബാധിക്കുന്നു? ഒരു അവലോകനം."
    },
    {
      title: "KSEB വിധി പാലിച്ചില്ലെങ്കിൽ എന്ത് ചെയ്യണം? നേരിട്ട് ഹൈക്കോടതിയിലേക്ക്! | ഓംബുഡ്സ്മാൻ വിധി",
      id: "lQQWOoY3UFk",
      category: "other",
      desc: "കെ.എസ്.ഇ.ബി.യുടെ (KSEB) ഭാഗത്തുനിന്നുണ്ടാകുന്ന ഗുരുതരമായ സേവന വീഴ്ചകൾക്കും കാലതാമസത്തിനുമെതിരെ സംസ്ഥാന വൈദ്യുതി ഓംബുഡ്സ്മാൻ പുറപ്പെടുവിച്ച ചരിത്രപരമായ ഒരു വിധി ഉപഭോക്താക്കൾക്കായി ഈ വീഡിയോയിൽ വിശദീകരിക്കുന്നു. 24 വർഷത്തെ അനാസ്ഥയ്ക്ക് പരാതിക്കാരിക്ക് 4.49 ലക്ഷം രൂപയും പലിശയും നഷ്ടപരിഹാരം നൽകാനാണ് ഉത്തരവ്."
    },
    {
      title: "വീണ്ടും ഇറങ്ങിയ ഡ്രാഫ്റ്റ് (കൂട്ടി ചേർക്കൽ) ആശ്വാസകരം - സപ്ലൈ കോഡ് (അഞ്ചാം ഭേദഗതി)-2024",
      id: "vRCfBxvijR8",
      category: "solar",
      desc: "പുതിയ കണക്ഷൻ എടുക്കുന്നതിനോ ലൈൻ വലിക്കുന്നതിനോ ആശ്വാസകരമാണ് സപ്ലൈ കോഡ് 2014-ന്റെ അഞ്ചാം ഭേദഗതി (2024)-യുടെ വീണ്ടും ഇറങ്ങിയ Draft-ന്റെ കൂട്ടിച്ചേർക്കൽ (Addentum)."
    },
    {
      title: "സോളാറിലെ ബാക്കി വൈദ്യുതി മറ്റൊരു കണക്ഷനിലേക്ക് മാറ്റാൻ - വീലിംഗ് (Banking & Wheeling)",
      id: "YNCGjIaSgXU",
      category: "solar",
      desc: "നമ്മുടെ തന്നെ പേരിലുള്ള മറ്റൊരു കണക്ഷനിലേയ്ക്ക്, അത് വ്യത്യസ്ത താരിഫിലുള്ളതായാലും ഇവിടെ അധികം വരുന്ന വൈദ്യുതി മാറ്റുവാൻ പറ്റും. അതിനെ ആണ് വീലിംഗ് (Wheeling) എന്ന് പറയുന്നത്."
    },
    {
      title: "മൊബൈലിൽ നിന്നും കറൻറ് ബിൽ നോക്കി കണക്കുകൾ കൃത്യമായി സൂക്ഷിക്കാം. (സോളാർ ബില്ലുകളും)",
      id: "QFOdhAVny_w",
      category: "solar",
      desc: "KSEB Current Bill നിങ്ങൾ ഡൌൺലോഡ് ചെയ്യാറില്ലേ? ഇതിന് വളരെ സൗകര്യ പ്രദമായ ആപ്ലിക്കേഷൻ KSEB-യ്ക്ക് ഉണ്ട്. (Version-4). ഈ ആപ്ലിക്കേഷൻ ഉപയോഗിച്ചു നിങ്ങളുടെ ബില്ലുകൾ എടുക്കുന്ന രീതിയും കറന്റ്‌ ചാർജ് അടയ്ക്കുന്ന കാര്യങ്ങളുമാണ് ഈ വീഡിയോയിൽ വിശദീകരിക്കുന്നത്."
    },
    {
      title: "Kerala Budget & Electricity Duty :- A Report",
      id: "x-tZeguWuX0",
      category: "solar",
      desc: "വൈദ്യുതി തീരുവയും (Electricity Duty) കേരള ബജറ്റും:- ഒരു അവലോകനം"
    },
    {
      title: "KSERC (Renewable Energy & Net Metering) (Second Amendment) Regulations-2024 (Draft)",
      id: "drdOD_7Tn1c",
      category: "solar",
      desc: "പുതിയ കരട് ഭേദഗതി സോളാർ സ്ഥാപിക്കുന്നവർക്ക് \\ സ്ഥാപിച്ചവർക്ക് പ്രതികൂലമോ?. എന്തൊക്കെ പുതിയ മാറ്റങ്ങൾ ഈ ഭേദഗതിയിൽ ഉണ്ട്?. ഈ കാര്യങ്ങളെ പറ്റി കൂടുതൽ സാങ്കേതികമായി അറിയുവാൻ വീഡിയോ കാണുക."
    },
    {
      title: "New Circular - Designated Persons under Regulation-3 - To Operate & Maintain the Installations.",
      id: "2JnK9lxSnSc",
      category: "other",
      desc: "വൈദ്യുതി പ്രതിഷ്ഠാപനങ്ങൾ പ്രവർത്തിപ്പിക്കുവാനും പരിപാലിക്കുവാനും Supervisor & Electricians ന്റെ എണ്ണവും യോഗ്യതയും തിട്ടപ്പെടുത്തി കൊണ്ട് പുതിയ സർക്കുലർ."
    },
    {
      title: "പണി പൂർത്തീകരിക്കുന്നതിന് മുൻപ് ഇലക്ട്രിക്കൽ കോൺട്രാക്ടറെ മാറ്റുന്നതിനുള്ള നിയമ നടപടികൾ.",
      id: "tCmRA17OGpY",
      category: "other",
      desc: "പണി പൂർത്തീകരിക്കാതെ ഇലക്ട്രിക്കൽ കോൺട്രാക്ടറെ മാറ്റേണ്ട സാഹചര്യം വന്നാൽ അതിനുള്ള നിയമ നടപടികൾ എന്തൊക്കെ?"
    },
    {
      title: "വൈദ്യുതി ലൈൻ കടന്നു പോകാൻ സ്ഥല ഉടമ അനുമതി നൽകിയില്ലെങ്കിൽ? (The Telecommunications Act, 2023)",
      id: "eQYUpwY5SCs",
      category: "other",
      desc: "The Telecommunications Act, 2023 വൈദ്യുതി ലൈനുകൾ വലിക്കുന്നതിൽ ബാധകമാണോ? വസ്തുവിന്റെ ഉടമ വൈദ്യുതി ലൈൻ വലിക്കുന്നതിനു തടസ്സം നിന്നാൽ എന്താണ് നടപടി? വൈദ്യുതി ലൈൻ കടന്നു പോകാൻ സ്ഥല ഉടമ അനുമതി നൽകിയില്ലെങ്കിൽ എന്താണ് നടപടിക്രമം? (The Telecommunications Act, 2023)."
    },
    {
      title: "വൈദ്യുതി വേലിയിൽ നിന്നും ഷോക്കടിച്ചു ദമ്പതികൾ മരണപെട്ടു.",
      id: "bwIu6w2s6Iw",
      category: "safety",
      desc: "പുൽപള്ളി (വയനാട്): കൃഷിയിടത്തിലെ വൈദ്യുതി വേലിയില്‍ നിന്നു ഷോക്കേറ്റ് ഗൃഹനാഥനും ഭാര്യയും മരിച്ചു. പുൽപള്ളി കാപ്പിസെറ്റ് ചെത്തിമറ്റം പുത്തന്‍ പുരയില്‍ ശിവദാസ് (62), ഭാര്യ സരസു (62) എന്നിവരാണ് മരിച്ചത്."
    },
    {
      title: "വൈദ്യുതി കണക്ഷന് വേണ്ടി വലിക്കുന്ന ലൈനിന്റെയും മറ്റും ചെലവുകൾ ആര് വഹിക്കണം? (Electric Connection)",
      id: "mNG8IQDyyno",
      category: "other",
      desc: "വൈദ്യുതി കണക്ഷനുമായി ബന്ധപ്പെട്ട നമുക്കുള്ള നിയമമാണ് Kerala Electricity Supply Code-2014. ഇതിന്റെ ഏറ്റവും പുതിയ Amendment-ന്റെ കരട് 17/1/24-ന് ഇറങ്ങുകയുണ്ടായി. ഇവ രണ്ടും കൂടി ക്രോഡീകരിച്ചാണ് ഈ വിഷയം കൈകാര്യം ചെയ്തിട്ടുള്ളത്."
    },
    {
      title: "EV Charging - ബഹുനില കെട്ടിടങ്ങൾക്കും വീടുകൾക്കും അനുകൂലമായ നിയമം വരുന്നു.",
      id: "3hUpYyCrGlI",
      category: "solar",
      desc: "Kerala Electricity Supply Code-2014 ന്റെ ഏറ്റവും പുതിയ ഭേദഗതിയിലൂടെ EV Charging നു വീടുകൾക്കും ബഹുനില കെട്ടിടങ്ങൾക്കും അനുകൂലമായ നിയമം വരുന്നു."
    },
    {
      title: "സ്വന്തം വൈദ്യുതി വണ്ടിയ്ക്ക് (Electric Vehicle) [EV] നിരക്ക് കുറഞ്ഞ പ്രത്യേക കണക്ഷൻ (?)(LT10A)",
      id: "naP8p943T0c",
      category: "solar",
      desc: "വീടുകളിലോ ഓഫീസുകളിലോ നിലവിൽ ഉള്ള വൈദ്യുതി കണക്ഷനിൽ നിന്നും സ്വന്തം Electric Vehicle (EV) ചാർജ് ചെയ്യാമോ? റെഗുലേറ്ററി കമ്മീഷന്റെ താരിഫ് ഓർഡറിലെ EV Charging നുള്ള പ്രത്യേക നിരക്ക് അനുസരിച്ചുള്ള പുതിയ കണക്ഷൻ കിട്ടുമോ? അപ്പാർമെന്റുകളിൽ EV Charging Facility എങ്ങനെ നടപ്പാക്കാം?"
    },
    {
      title: "Whether Electrical Plan Approval Mandatory? ഇലക്ട്രിക്കൽ പ്ലാൻ അപ്പ്രൂവൽ നിർബന്ധമോ? നിയമങ്ങളിൽ",
      id: "Gi6vWk7zJ10",
      category: "other",
      desc: "കേരളത്തിൽ വൈദ്യുതി പ്രതിഷ്ഠാപനങ്ങൾക്ക് സ്കീം അപ്പ്രൂവൽ നിർബന്ധമോ? ഇത് KSEB പോലെയുള്ള ലൈസൻസികളെ എങ്ങനെ ബാധിക്കുന്നു?"
    },
    {
      title: "Three Year Valid Renewed Lift License (നിലവിൽ ഉള്ള ലിഫ്റ്റുകൾക്കും ഇനി മുതൽ മൂന്ന് വർഷ ലൈസൻസ്)",
      id: "QIqPfpnR5Uk",
      category: "other",
      desc: "2012 മുതൽ കേരളത്തിലെ ലിഫ്റ്റുകൾക്ക് ലൈസൻസ് സമ്പ്രദായം നടപ്പാക്കി. അന്ന് മുതൽ പുതിയതായി സ്ഥാപിക്കുന്ന എല്ലാ ലിഫ്റ്റുകൾക്കും മൂന്ന് വർഷം കാലദൈർഘ്യം ഉള്ള ലൈസൻസ് ആണ് കൊടുക്കുന്നത്. എന്നാൽ നിലവിലുള്ള അഥവാ ഒരു പ്രാവശ്യം ലൈസൻസ് കൊടുത്ത ലിഫ്റ്റുകൾക്ക് പുതുക്കി ലൈസൻസ് നൽകാൻ ഒരു വർഷത്തേക്ക് കാലദൈർഘ്യം ഉള്ള ലൈസൻസ് മാത്രമാണ് കൊടുത്തു കൊണ്ടിരുന്നത്. ആ രീതിയ്ക്കാണ് ഇപ്പോൾ മാറ്റം വന്നിരിക്കുന്നത്."
    },
    {
      title: "ഇലക്ട്രിക്കൽ ഇൻസ്‌പെക്ടറേറ്റിലെ ഈ കത്ത് ഇനിയും പ്രശ്നക്കാരൻ - പിൻവലിച്ചു കൂടെ? (ഭാഗം-1)",
      id: "TFWU27Pyp-k",
      category: "other",
      desc: "എന്താണ് നിയമങ്ങളിൽ പറഞ്ഞിരിക്കുന്നത്? അവ ആണ് നാം അനുസരിക്കേണ്ടത്. നിയമങ്ങൾക്ക് വിരുദ്ധമായുള്ള യാതൊരു നിർദ്ദേശവും നാം അംഗീകരിക്കേണ്ടതില്ല. അത്തരത്തിൽ വിവാദമായ ഒരു കത്താണ് ഇവിടെ വിഷയം. ഭാഗം-1 വീഡിയോ."
    },
    {
      title: "ഇലക്ട്രിക്കൽ ഇൻസ്‌പെക്ടറേറ്റിലെ ഈ കത്ത് ഇനിയും പ്രശ്നക്കാരൻ - പിൻവലിച്ചു കൂടെ? (ഭാഗം-2)",
      id: "_bb0nnSEAoA",
      category: "other",
      desc: "ഇലക്ട്രിക്കൽ ഇൻസ്‌പെക്ടറേറ്റിലെ ഈ കത്ത് ഇനിയും പ്രശ്നക്കാരൻ - പിൻവലിച്ചു കൂടെ? ഭാഗം-2 വീഡിയോ."
    },
    {
      title: "ഒരേ ഒരു ഭൂമി, ഒരു ഒറ്റ എർത്തിങ്ങ് സംവിധാനവും. (ഭാഗം-1) One Earth and only one Earthing System.",
      id: "Pw7qs-2mCvo",
      category: "safety",
      desc: "ഭൂമിയിലൂടെ സഞ്ചരിക്കുന്ന Fault Current - ന് എന്ത് സംഭവിക്കുന്നു? എർത്തിന്റെ പ്രാധാന്യവും അടിസ്ഥാന കാര്യങ്ങളും വിശദീകരിക്കുന്ന ഭാഗം-1 വീഡിയോ."
    },
    {
      title: "ഒരേ ഒരു ഭൂമി, ഒരു ഒറ്റ എർത്തിങ്ങ് സംവിധാനവും. (ഭാഗം-2) One Earth and only one Earthing System.",
      id: "jeBcVk5c-XI",
      category: "safety",
      desc: "Ground Potential Rise (GPR) ഉം SPD-യുടെ എർത്തിങ്ങും ചർച്ച ചെയ്യുന്ന ഭാഗം-2 വീഡിയോ."
    },
    {
      title: "ആഘോഷങ്ങൾ ആപത്ത് വിളിച്ചു വരുത്തരുത്. കറുകുറ്റിയിൽ കെട്ടിടം പൂർണ്ണമായും കത്തി, ഒരാൾ മരണപ്പെട്ടു",
      id: "bdgKc5JBwVM",
      category: "safety",
      desc: "നമ്മുടെ അദ്ധ്വാനഫലവും ജീവനും തീയ്ക്ക് അടിമപെടാതിരിക്കട്ടെ. അതിനുള്ള മാർഗ്ഗങ്ങളാണ് ഈ വീഡിയോയിലൂടെ വിശദീകരിക്കുന്നത്."
    },
    {
      title: "KSEB ജീവനക്കാരൻ ശ്രീ.ഒ.എ.തമ്പിയുടെ മാരകമായ അപകടം-അന്വേഷണ റിപ്പോർട്ടും അച്ചടക്കനടപടിയും.(Safety)",
      id: "lqiPtDZ98ZU",
      category: "safety",
      desc: "തൃശൂർ കയ്പമംഗലം ഇലക്ട്രിക്കല്‍ സെക്ഷനിലെ ശ്രീ.ഒ.എ.തമ്പി ജോലിയ്ക്കിടെ മരണപ്പെട്ടതുമായി ബന്ധപെട്ട അന്വേഷണ റിപോർട്ടും വൈദ്യുതി സുരക്ഷാ അവലോകനവും."
    },
    {
      title: "പുരപ്പുറത്ത് സോളാർ സ്ഥാപിച്ചതിന്റെ പേരിൽ മാസം തോറും കുറഞ്ഞത് 50 രൂപ വീതം KSEB വാങ്ങുന്നു.",
      id: "fEqYFs7C_Io",
      category: "solar",
      desc: "സോളാർ സ്ഥാപിച്ചതിന്റെ പേരിൽ മാസം തോറും KSEB ഈടാക്കുന്ന അധിക തുകയെയും തർക്കങ്ങളെയും കുറിച്ചുള്ള അവലോകനം."
    },
    {
      title: "Lightning Protection System Design - Part-1",
      id: "LQIu4v_orjQ",
      category: "lightning",
      desc: "IS/IEC 62305 അനുസരിച്ചുള്ള മിന്നൽ രക്ഷാ ചാലക രൂപകൽപ്പനയുടെ ഒന്നാം ഭാഗം."
    },
    {
      title: "Lightning Protection System Design - Part-2",
      id: "d5bf4aIsRmE",
      category: "lightning",
      desc: "IS/IEC 62305 അനുസരിച്ചുള്ള മിന്നൽ രക്ഷാ ചാലക രൂപകൽപ്പനയുടെ രണ്ടാം ഭാഗം."
    },
    {
      title: "Lightning Protection System Design - Part-3",
      id: "UlnDuz7m98Y",
      category: "lightning",
      desc: "IS/IEC 62305 അനുസരിച്ചുള്ള മിന്നൽ രക്ഷാ ചാലക രൂപകൽപ്പനയുടെ മൂന്നാം ഭാഗം."
    },
    {
      title: "Lightning Protection System Design - Part-4",
      id: "xHMPUWXFFFA",
      category: "lightning",
      desc: "IS/IEC 62305 അനുസരിച്ചുള്ള മിന്നൽ രക്ഷാ ചാലക രൂപകൽപ്പനയുടെ നാലാം ഭാഗം."
    },
    {
      title: "Multistoried Buildings (Height > 15m) - Topic Intro",
      id: "YmGURCgrUrs",
      category: "other",
      desc: "ബഹുനില കെട്ടിടങ്ങളിലെ ഇലക്ട്രിഫിക്കേഷൻ ഡിസൈൻ അടിസ്ഥാന വിവരങ്ങൾ."
    },
    {
      title: "Multistoried Buildings (Height > 15m) - Discussion Part-1",
      id: "0kjbbBVGf60",
      category: "other",
      desc: "ബഹുനില കെട്ടിടങ്ങളിലെ സുരക്ഷയും ഡിസൈനുമായി ബന്ധപ്പെട്ട ചർച്ചയുടെ ഒന്നാം ഭാഗം."
    },
    {
      title: "Multistoried Buildings (Height > 15m) - Discussion Part-2",
      id: "r5gtnubPoZo",
      category: "other",
      desc: "ബഹുനില കെട്ടിടങ്ങളിലെ സുരക്ഷയും ഡിസൈനുമായി ബന്ധപ്പെട്ട ചർച്ചയുടെ രണ്ടാം ഭാഗം."
    },
    {
      title: "Multistoried Buildings (Height > 15m) - Discussion Part-3",
      id: "prbE8Nljwk0",
      category: "other",
      desc: "ബഹുനില കെട്ടിടങ്ങളിലെ സുരക്ഷയും ഡിസൈനുമായി ബന്ധപ്പെട്ട ചർച്ചയുടെ മൂന്നാം ഭാഗം."
    },
    {
      title: "Earthing Configurations: Basic terms to understand configurations",
      id: "3tv_ES4kD58",
      category: "safety",
      desc: "Functional Earthing, Protective Earthing, PEN Conductor, Protective Multiple Earthing (PME) തുടങ്ങിയവയെ കുറിച്ചുള്ള അടിസ്ഥാന ക്ലാസ്."
    },
    {
      title: "Earthing Configurations: Different TN systems & TN-C System",
      id: "acCa6-Ef78U",
      category: "safety",
      desc: "TN-C സിസ്റ്റത്തിന്റെ പ്രത്യേകതകളും അതിൽ എന്തുകൊണ്ട് RCD ഉപയോഗിക്കാൻ സാധിക്കില്ല എന്നതുമായ കാര്യങ്ങൾ."
    },
    {
      title: "Earthing Configurations: TN-C-S configuration",
      id: "CFT2mXeI5d8",
      category: "safety",
      desc: "TN-C-S കോൺഫിഗറേഷന്റെ വിവിധ വശങ്ങളെയും സുരക്ഷയെയും കുറിച്ചുള്ള ക്ലാസ്."
    },
    {
      title: "Earthing Configurations: TN-S configuration",
      id: "2_TL-Jqmg54",
      category: "safety",
      desc: "TN-S എർത്തിങ് സംവിധാനത്തിന്റെ ഘടനയും പ്രവർത്തന രീതിയും വിശദീകരിക്കുന്ന ക്ലാസ്."
    },
    {
      title: "Earthing Configurations: TT configuration",
      id: "4E9S3JvaAzU",
      category: "safety",
      desc: "TT എർത്തിങ് സംവിധാനം, അതിന്റെ പ്രവർത്തനങ്ങൾ, ഗുണദോഷങ്ങൾ എന്നിവ വിശദീകരിക്കുന്ന വീഡിയോ."
    },
    {
      title: "Earthing Configurations: IT system",
      id: "Y9grwuAJ7Y0",
      category: "safety",
      desc: "IT സിസ്റ്റം, അതിന്റെ പ്രത്യേകതകൾ, ഉപയോഗങ്ങൾ എന്നിവയെ കുറിച്ചുള്ള സാങ്കേതിക അവലോകനം."
    },
    {
      title: "Electrical Safety & Basic Life Support",
      id: "GIFltjLr4u4",
      category: "safety",
      desc: "വൈദ്യുത അപകടങ്ങളും ജീവൻ രക്ഷിക്കാനുള്ള പ്രാഥമിക ശുശ്രൂഷാ രീതികളും (Basic Life Support)."
    },
    {
      title: "Electrical Safety - A Discussion",
      id: "Tg5xxrfxwWw",
      category: "safety",
      desc: "വൈദ്യുത സുരക്ഷാ രീതികളെക്കുറിച്ചുള്ള പൊതു ചർച്ച."
    },
    {
      title: "Fatal Electrical Accidents during Street Light Maintenance",
      id: "Ci6btrD1HII",
      category: "safety",
      desc: "തെരുവ് വിളക്കുകളുടെ പരിപാലനത്തിനിടയിൽ ഉണ്ടാകുന്ന വൈദ്യുത അപകടങ്ങളും അവ ഒഴിവാക്കാനുള്ള സുരക്ഷാ നടപടികളും."
    },
    {
      title: "Safety points while you are constructing a building near electric lines",
      id: "Q--TZknQN1c",
      category: "safety",
      desc: "വൈദ്യുതി ലൈനുകൾക്ക് സമീപം കെട്ടിടങ്ങൾ നിർമ്മിക്കുമ്പോൾ പാലിക്കേണ്ട സുരക്ഷാ മാനദണ്ഡങ്ങൾ."
    },
    {
      title: "Safety Points while handling Household Electrical Equipments",
      id: "G_jdLw15m3s",
      category: "safety",
      desc: "ഗാർഹിക വൈദ്യുത ഉപകരണങ്ങൾ കൈകാര്യം ചെയ്യുമ്പോൾ ശ്രദ്ധിക്കേണ്ട പ്രധാന സുരക്ഷാ കാര്യങ്ങൾ."
    },
    {
      title: "Electrocution of KSEB staff & Contract staff",
      id: "98fDRuOyQl8",
      category: "safety",
      desc: "KSEB ജീവനക്കാർക്കും കരാർ ജീവനക്കാർക്കും ഉണ്ടാകുന്ന അപകടങ്ങളും അതിനുള്ള കാരണങ്ങളും."
    },
    {
      title: "Direct Contact & Indirect Contact - Introduction",
      id: "sSrxJ2Yfmxs",
      category: "safety",
      desc: "ഡയറക്റ്റ്, ഇൻഡയറക്റ്റ് കോൺടാക്റ്റുകൾ കൊണ്ടുള്ള അപകടങ്ങളും അവ ഒഴിവാക്കാനുള്ള സുരക്ഷാ മാർഗ്ഗങ്ങളും."
    },
    {
      title: "Direct Contact & Indirect Contact - Residual Current Device (RCD) use",
      id: "Neeyvfxr8Ik",
      category: "safety",
      desc: "RCD-യുടെ സുരക്ഷാ പ്രാധാന്യവും ഇന്ത്യൻ നിയമങ്ങളിലെ (IS 732 & IS 3043) മില്ലി ആമ്പിയർ തോതും."
    },
    {
      title: "Direct Contact & Indirect Contact - Additional Protection via RCD",
      id: "ISK39y3vxrU",
      category: "safety",
      desc: "RCD-കളുടെ അഡീഷണൽ പ്രൊട്ടക്ഷൻ രീതികളും Class-1, Class-2, Class-3 ഉപകരണങ്ങളെക്കുറിച്ചുള്ള വിശദീകരണവും."
    },
    {
      title: "Isolator, Switch & Circuit Breaker differences - Part-1",
      id: "xkxmbJLoB4Y",
      category: "other",
      desc: "Isolator, Switch, Circuit Breaker എന്നിവ തമ്മിലുള്ള വ്യത്യാസങ്ങൾ വിശദീകരിക്കുന്ന ഭാഗം-1 വീഡിയോ."
    },
    {
      title: "Isolator, Switch & Circuit Breaker differences - Part-2",
      id: "MlQJkR2_DNc",
      category: "other",
      desc: "Isolator, Switch, Circuit Breaker എന്നിവ തമ്മിലുള്ള വ്യത്യാസങ്ങൾ വിശദീകരിക്കുന്ന ഭാഗം-2 വീഡിയോ."
    }
  ];

  const categoryNames = {
    solar: "Solar & Policy",
    lightning: "Lightning Protection",
    safety: "Safety & Earthing",
    other: "Other Topics"
  };

  const youtubeGrid = document.getElementById("youtubeGrid");
  const searchInput = document.getElementById("youtubeSearchInput");
  const filterButtons = document.querySelectorAll(".youtube-filter-btn");

  let currentCategory = "all";
  let searchQuery = "";

  function renderVideos() {
    if (!youtubeGrid) return;
    
    // Clear grid
    youtubeGrid.innerHTML = "";
    let visibleCount = 0;

    youtubeVideos.forEach((video) => {
      // Filter by category
      if (currentCategory !== "all" && video.category !== currentCategory) {
        return;
      }

      // Filter by search query
      const titleLower = video.title.toLowerCase();
      const descLower = video.desc.toLowerCase();
      const searchLower = searchQuery.toLowerCase();
      if (searchQuery && !titleLower.includes(searchLower) && !descLower.includes(searchLower)) {
        return;
      }

      visibleCount++;

      const embedUrl = `https://www.youtube.com/embed/${video.id}`;
      const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

      const card = document.createElement("div");
      card.className = "youtube-card";
      card.innerHTML = `
        <div class="youtube-video-container" onclick="loadYoutubeVideo(this, '${embedUrl}', '${video.title.replace(/'/g, "\\'")}')">
          <img src="${thumbnailUrl}" class="youtube-thumbnail" alt="${video.title}" loading="lazy">
          <div class="youtube-play-btn-overlay">
            <svg viewBox="0 0 68 48">
              <path class="youtube-play-btn-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-.13,27.1-1.55c2.93-.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#212121" fill-opacity="0.8"></path>
              <polygon points="27,33 44,24 27,15" fill="#fff"></polygon>
            </svg>
          </div>
        </div>
        <div class="youtube-card-body">
          <h4>${video.title}</h4>
          <p>${video.desc}</p>
          <div style="margin-top: auto; padding-top: 15px;">
            <span class="youtube-tag tag-${video.category}">${categoryNames[video.category]}</span>
          </div>
        </div>
      `;
      youtubeGrid.appendChild(card);
    });

    // Handle no results
    let noResults = document.getElementById("youtubeNoResults");
    if (!noResults) {
      noResults = document.createElement("div");
      noResults.id = "youtubeNoResults";
      noResults.style.textAlign = "center";
      noResults.style.padding = "40px";
      noResults.style.color = "var(--text-muted)";
      noResults.style.gridColumn = "1 / -1";
      noResults.style.width = "100%";
      noResults.innerHTML = `No videos found matching your criteria.<br>ചോദിച്ചതുമായി യോജിക്കുന്ന വീഡിയോകൾ ഒന്നും കാണാനില്ല.`;
    }

    if (visibleCount === 0) {
      noResults.style.display = "block";
      youtubeGrid.appendChild(noResults);
    } else {
      noResults.style.display = "none";
    }
  }

  window.loadYoutubeVideo = function(container, embedUrl, title) {
    container.innerHTML = `
      <iframe 
        src="${embedUrl}?autoplay=1" 
        title="${title}" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
    `;
  };

  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      searchQuery = e.target.value;
      renderVideos();
    });
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      renderVideos();
    });
  });

  renderVideos();
});
