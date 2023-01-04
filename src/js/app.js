import '/src/css/app.css';

// Import dependencies
import { Application } from "@hotwired/stimulus";
import StimulusControllerResolver, {
  createViteGlobResolver,
} from "stimulus-controller-resolver";


// Initialize Stimulus and resolve controllers
const application = Application.start();

StimulusControllerResolver.install(
  application,
  createViteGlobResolver(import.meta.glob("./controllers/**/*-controller.js"))
);

// undocumented Stimulus debug: https://github.com/hotwired/stimulus/pull/354
// Vite env vars: https://vitejs.dev/guide/env-and-mode.html
application.debug = import.meta.env.DEV;
