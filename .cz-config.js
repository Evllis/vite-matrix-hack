'use strict'

module.exports = {
    types: [
        { value: 'ð first_commit', name: 'ð åæ¬¡æäº¤' },
        { value: 'ð introduce_features', name: 'ð å¼å¥æ°åè½' },
        { value: 'ð issue_label', name: 'ð åè¡/çæ¬æ ç­¾' },
        { value: 'ð fix_bug', name: 'ð ä¿®å¤ bug' },
        { value: 'ð important_patch', name: 'ð éè¦è¡¥ä¸' },
        { value: 'ð i18n', name: 'ð å½éåä¸æ¬å°å' },
        { value: 'ð update_ui', name: 'ð æ´æ°UIåæ ·å¼æä»¶' },
        { value: 'ð¬ update_example', name: 'ð¬ æ´æ°æ¼ç¤º/ç¤ºä¾' },
        { value: 'ð¨ remove_linter', name: 'ð¨ ç§»é¤ linter è­¦å' },
        { value: 'ð§ modify_config', name: 'ð§ ä¿®æ¹éç½®æä»¶' },
        { value: 'â add_dep', name: 'â å¢å ä¸ä¸ªä¾èµ' },
        { value: 'â reduce_dep', name: 'â åå°ä¸ä¸ªä¾èµ' },
        { value: 'â« update_dep', name: 'â« åçº§ä¾èµ' },
        { value: 'â¬ demotion_dep', name: 'â¬ éçº§ä¾èµ' },
        { value: 'ð¥ improve_per', name: 'ð¥ æåæ§è½' },
        { value: 'ð add_analysis', name: 'ð æ·»å åææè·è¸ªä»£ç ' },
        { value: 'ð deploy_fun', name: 'ð é¨ç½²åè½' },
        { value: 'â add_test', name: 'â å¢å æµè¯' },
        { value: 'ð write_document', name: 'ð æ°åææ¡£' },
        { value: 'ð¨ reconstruction', name: 'ð¨ éå¤§éæ' },
        { value: 'ð¨ improve_code', name: 'ð¨ æ¹è¿ä»£ç ç»æ/ä»£ç æ ¼å¼' },
        { value: 'ð¥ remove_code', name: 'ð¥ ç§»é¤ä»£ç ææä»¶' },
        { value: 'ð§ working', name: 'ð§ å·¥ä½è¿è¡ä¸­' },
        { value: 'ðï¸ discard_or_remove', name: 'ðï¸ åºå¼æå é¤' },
        { value: 'â¿ accessible', name: 'â¿ å¯è®¿é®æ§' },
        { value: 'ð³ docker', name: 'ð³ Dockerç¸å³å·¥ä½' },
        { value: 'âï¸ fix_typo', name: 'âï¸ ä¿®å¤ typo' },
        { value: 'ð· add_build', name: 'ð· æ·»å  CI æå»ºç³»ç»' },
        { value: 'ð fix_build', name: 'ð ä¿®å¤ CI æå»ºé®é¢' },
        { value: 'ð fix_safe', name: 'ð ä¿®å¤å®å¨é®é¢' },
        { value: 'ð fix_apple', name: 'ð ä¿®å¤ macOS ä¸çé®é¢' },
        { value: 'ð§ fix_linux', name: 'ð§ ä¿®å¤ Linux ä¸çé®é¢' },
        { value: 'ð fix_win', name: 'ð ä¿®å¤ Windows ä¸çé®é¢' },
        { value: 'ð branch_merge', name: 'ð åæ¯åå¹¶' },
        { value: 'ð roll_back', name: 'ð ä»£ç åé' },
        { value: 'ð« tool_change', name: 'ð« å¼åå·¥å·åå¨(æå»ºãèææ¶å·¥å·ç­)' },
        { value: 'ð§» change_document_only', name: 'ð§» åæ´çç°æææ¡£' }
    ],

    // scopes: [{ name: 'æ¨¡å1' }, { name: 'æ¨¡å2' }, { name: 'exampleScope' }, { name: 'changeMe' }],
    // // it needs to match the value for field type. Eg.: 'fix'
    // scopeOverrides: {
    //   fix: [
    //     {name: 'merge'},
    //     {name: 'style'},
    //     {name: 'e2eTest'},
    //     {name: 'unitTest'}
    //   ]
    // },

    // it needs to match the value for field type. Eg.: 'fix'
    /*
    scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */

    allowTicketNumber: false,
    isTicketNumberRequired: false,
    ticketNumberPrefix: 'TICKET-',
    ticketNumberRegExp: '\\d{1,5}',

    // override the messages, defaults are as follows
    messages: {
        type: 'éæ©è¦æäº¤çæ´æ¹ç±»å:',
        scope: 'ç¸å³éæ±åç§°ä¸º:',
        // used if allowCustomScopes is true
        customScope: 'æ´æ¹åå®¹çæå±éæ±ä¸º:',
        subject: 'åä¸ä¸ªç®ç­ãå½ä»¤æ¶æçè¯­å¥æ¥æè¿°æ´æ¹:\n',
        body: 'è¯¦ç»æè¿°æ´æ¹åå  (å¯éï¼æåè½¦è·³è¿). ä½¿ç¨ "|" æ¥æ¢è¡:\n',
        breaking: 'ååº BREAKING CHANGES (optional):\n',
        footer: 'ååºè¿æ¬¡æ´æ¹ å³é­ç ISSUES (å¯é). å¦: #31, #34:\n',
        confirmCommit: 'ç¡®å®æäº¤ä¸é¢çæ´æ¹?'
    },

    allowCustomScopes: true,
    allowBreakingChanges: ['ç¹æ§', 'ä¿®å¤'],
    // skip any questions you want
    skipQuestions: ['customScope', 'body', 'breaking', 'footer'],

    // limit subject length
    subjectLimit: 100
    // breaklineChar: '|', // It is supported for fields body and footer.
    // footerPrefix : 'ISSUES CLOSED:'
    // askForBreakingChangeFirst : true, // default is false
}
