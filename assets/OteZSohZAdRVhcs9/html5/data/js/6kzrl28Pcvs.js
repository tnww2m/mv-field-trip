﻿window.globalProvideData('slide', '{"title":"Challenges and Strategies?","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":4,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide4","width":960,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0x575930","alpha":100,"stop":0}]}},"id":"6kzrl28Pcvs","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"5tddy4Lyn81.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_this.6gF4Z3C3FGt"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5cAhukA0D8g.InvalidPromptSlide"}}]},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6UhtQiQnVtQ.5q2sz60FK90"}}]},"ReviewInt_5izox8yPeXY":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5tddy4Lyn81"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5izox8yPeXY","typea":"var","valueb":"5vT7upOVmtG","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00001100001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5vT7upOVmtG.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5izox8yPeXY"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5vT7upOVmtG.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5izox8yPeXY"}]}]}]},"ReviewIntCorrectIncorrect_5izox8yPeXY":{"kind":"actiongroup","actions":[]},"AnsweredInt_5izox8yPeXY":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5izox8yPeXY"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100001"}]}]},"DisableChoices_5izox8yPeXY":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5tddy4Lyn81"},"enabled":{"type":"boolean","value":false}}]},"5izox8yPeXY_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6gF4Z3C3FGt.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5izox8yPeXY"}]}]},"SetLayout_pxabnsnfns00001100001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100001"}]}]},"NavigationRestrictionNextSlide_6kzrl28Pcvs":{"kind":"actiongroup","actions":[]},"NavigationRestrictionPreviousSlide_6kzrl28Pcvs":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00001100001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00001100001"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5cAhukA0D8g","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5cAhukA0D8g","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5izox8yPeXY","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5izox8yPeXY"}],"elseActions":[{"kind":"exe_actiongroup","id":"5izox8yPeXY_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5izox8yPeXY","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5izox8yPeXY","typea":"var","valueb":"5vT7upOVmtG","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5vT7upOVmtG"},"completed_slide_ref":{"type":"string","value":"_player.6UhtQiQnVtQ.5goB2KwvXDe"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5izox8yPeXY","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5izox8yPeXY","typea":"var","valueb":"5vT7upOVmtG","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5vT7upOVmtG"},"completed_slide_ref":{"type":"string","value":"_player.6UhtQiQnVtQ.5goB2KwvXDe"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6kzrl28Pcvs"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6kzrl28Pcvs"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5tddy4Lyn81"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6VZqLgRmCUU"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6MEBmdvYxCh"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":38,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":9,"rotateYPos":270,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":18,"bottom":540,"altText":"Rectangle 8","pngfb":false,"pr":{"l":"Lib","i":11}},"html5data":{"xPos":0,"yPos":0,"width":18,"height":540,"strokewidth":0}},"width":18,"height":540,"resume":true,"useHandCursor":true,"id":"6MEBmdvYxCh"},{"kind":"textinput","bindto":"_player.TextEntry11","align":"left","verticalAlign":"top","rtl":false,"numeric":false,"multiline":true,"maxchars":0,"placeholder":"Type your response here.","fontsize":19,"textcolor":"0x2C2C18","bold":true,"italic":false,"font":"Century GothicBold BoldF1011AC7","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":89,"yPos":235,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":407,"rotateYPos":141,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"5tddy4Lyn81","linkId":"","type":"vectortext","xPos":10,"yPos":5,"xAccOffset":0,"yAccOffset":0,"width":795,"height":283,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":227,"bottom":24,"pngfb":false,"pr":{"l":"Lib","i":184}}},"html5data":{"xPos":0,"yPos":0,"width":815,"height":283,"strokewidth":1}},"width":815,"height":283,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":816,"bottom":284,"altText":"Type your response here.","pngfb":false,"pr":{"l":"Lib","i":196}}},"id":"5tddy4Lyn81","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry11","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"exe_actiongroup","id":"_parent.ActGrpOnSubmitButtonClick"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6VZqLgRmCUU_840371795","id":"01","linkId":"txt__default_6VZqLgRmCUU","type":"acctext","xPos":7,"yPos":3,"xAccOffset":7,"yAccOffset":3,"width":826,"height":256,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Based on the newspaper article, what was either a challenge the industries being discussed were facing at the time, or a strategy they were using to meet the wartime demand for products? \\n","style":{"fontFamily":"\\"Lato Charset0_v8MUn45tBE51451DC\\",\\"Lato\\"","fontSize":20,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","displayCase":"asIs","foregroundColor":"#EEEEEC","linkColor":"#EEEEEC","ascent":26.32,"descent":5.68,"leading":0,"underlinePosition":-1.867,"underlineThickness":1.6,"xHeight":13.507}}],"style":{"justification":"left","listLevel":1,"lineSpacing":22.4,"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100,"bulletChar":8226,"bulletFont":"Arial","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":188,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"\\n","style":{"fontFamily":"\\"Lato Charset0_v8MUn45tBE51451DC\\",\\"Lato\\"","fontSize":10,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","displayCase":"asIs","foregroundColor":"#EEEEEC","linkColor":"#EEEEEC","ascent":13.16,"descent":2.84,"leading":0,"underlinePosition":-0.933,"underlineThickness":0.8,"xHeight":6.753}}],"style":{"justification":"left","listLevel":1,"lineSpacing":22.4,"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100,"bulletChar":8226,"bulletFont":"Arial","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":1,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"*You can find the article by clicking the “Resources” button in the top right corner of this screen. ","style":{"fontFamily":"\\"LatoBoldItalic ChItalicB6D04671\\",\\"Lato\\"","fontSize":18,"fontIsBold":false,"fontIsItalic":true,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","displayCase":"asIs","foregroundColor":"#EEEEEC","linkColor":"#EEEEEC","ascent":23.688,"descent":5.112,"leading":0,"underlinePosition":-1.704,"underlineThickness":1.392,"xHeight":12.156}}],"style":{"justification":"left","listLevel":1,"lineSpacing":22.4,"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100,"bulletChar":8226,"bulletFont":"Arial","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":101,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Century Gothic","fontSize":18,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FFFFFF","linkColor":"#D57800"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":825,"bottom":193,"pngfb":false,"pr":{"l":"Lib","i":186}}}],"shapemaskId":"","xPos":89,"yPos":25,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":420,"rotateYPos":131,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":840,"bottom":262,"altText":"Based on the newspaper article, what was either a challenge the industries being discussed were facing at the time, or a strategy they were using to meet the wartime demand for products? \\n\\n*You can find the article by clicking the “Resources” button in the top right corner of this screen. ","pngfb":false,"pr":{"l":"Lib","i":197}},"html5data":{"xPos":0,"yPos":0,"width":840,"height":262,"strokewidth":0}},"width":840,"height":262,"resume":true,"useHandCursor":true,"id":"6VZqLgRmCUU"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5izox8yPeXY_CorrectReview","id":"01","linkId":"5izox8yPeXY_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":513,"bottom":38,"pngfb":false,"pr":{"l":"Lib","i":70}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":960,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":69}},"html5data":{"xPos":1,"yPos":1,"width":957,"height":37,"strokewidth":2}},"width":960,"height":40,"resume":false,"useHandCursor":true,"id":"5izox8yPeXY_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5izox8yPeXY_IncorrectReview","id":"01","linkId":"5izox8yPeXY_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":520,"bottom":38,"pngfb":false,"pr":{"l":"Lib","i":72}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":960,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":71}},"html5data":{"xPos":1,"yPos":1,"width":957,"height":37,"strokewidth":2}},"width":960,"height":40,"resume":false,"useHandCursor":true,"id":"5izox8yPeXY_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');