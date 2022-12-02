/* eslint-disable no-undef */
Feature('Like & UnLike Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurants');
  I.see('Restoran tidak ditemukan', '#restaurants');
});

Scenario('like and unlike one resto', async ({ I }) => {
  I.amOnPage('/');
  I.wait(3);

  I.seeElement('.post-item');
  I.click(locate('.post-item a').first());
  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.wait(3);

  I.seeElement('.post-item');
  I.click(locate('.post-item a').first());
  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.wait(3);

  I.see('Restoran tidak ditemukan', '#restaurants');
});
