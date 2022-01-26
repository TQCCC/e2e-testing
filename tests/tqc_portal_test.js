Feature('TQC Portal');

Scenario('Test TQC Portal', ({ I }) => {

    I.amOnPage('/gitbook');
    I.waitForText("Portal");
    pause();
});
