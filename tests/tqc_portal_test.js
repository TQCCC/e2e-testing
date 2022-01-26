Feature('TQC Portal');

Scenario('Test TQC Portal', ({ I }) => {

    I.amOnPage('/');
    I.waitForText("Portal");
    pause();
});
