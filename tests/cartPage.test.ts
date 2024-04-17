import { test, expect, chromium } from '@playwright/test';
import { setupBrowser } from '../test_utils/chromeBrowserSetup.ts';
import { fillAndSubmitFormLoginToYourAccount } from '../test_utils/loginData.ts';

const BUY_ITEMS = [
    'item_1',
    'item_2',
    'item_3'
  ];