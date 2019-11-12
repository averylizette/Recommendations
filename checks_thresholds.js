import http from "k6/http";
import { check } from "k6";
import { Rate } from "k6/metrics";

export let errorRate = new Rate("errors");

export let options = {
  thresholds: {
    "errors": ["rate<0.1"], // <10% errors
  }
};


export default function() {
    const result = check(http.get("http://localhost:3000/9999996/"), {
      "status is 200": (r) => r.status == 200
    })
    errorRate.add(!result);
  };