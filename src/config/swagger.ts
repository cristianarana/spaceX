import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "SpaceX API",
      version: "1.0.0",
      description: "API para interactuar con SpaceX API",
      contact: {
        name: "Cristian Arana",
        email: "cristianarana767@gmail.com",
      },
      servers: [{ url: "http://localhost:3000" }],
    },
    components: {
      schemas: {
        Rocket: {
          type: "object",
          properties: {
            id: { type: "integer" },
            active: { type: "boolean" },
            stages: { type: "integer" },
            boosters: { type: "integer" },
            cost_per_launch: { type: "integer" },
            success_rate_pct: { type: "integer" },
            first_flight: { type: "string", format: "date" },
            country: { type: "string" },
            company: { type: "string" },
            height: {
              type: "object",
              properties: {
                meters: { type: "number" },
                feet: { type: "number" },
              },
            },
            diameter: {
              type: "object",
              properties: {
                meters: { type: "number" },
                feet: { type: "number" },
              },
            },
            mass: {
              type: "object",
              properties: {
                kg: { type: "integer" },
                lb: { type: "integer" },
              },
            },
            payload_weights: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: { type: "string" },
                  name: { type: "string" },
                  kg: { type: "integer" },
                  lb: { type: "integer" },
                },
              },
            },
            first_stage: {
              type: "object",
              properties: {
                reusable: { type: "boolean" },
                engines: { type: "integer" },
                fuel_amount_tons: { type: "number" },
                burn_time_sec: { type: "integer" },
                thrust_sea_level: {
                  type: "object",
                  properties: {
                    kN: { type: "integer" },
                    lbf: { type: "integer" },
                  },
                },
                thrust_vacuum: {
                  type: "object",
                  properties: {
                    kN: { type: "integer" },
                    lbf: { type: "integer" },
                  },
                },
              },
            },
            second_stage: {
              type: "object",
              properties: {
                reusable: { type: "boolean" },
                engines: { type: "integer" },
                fuel_amount_tons: { type: "number" },
                burn_time_sec: { type: "integer" },
                thrust: {
                  type: "object",
                  properties: {
                    kN: { type: "integer" },
                    lbf: { type: "integer" },
                  },
                },
                payloads: {
                  type: "object",
                  properties: {
                    option_1: { type: "string" },
                    option_2: { type: "string" },
                    composite_fairing: {
                      type: "object",
                      properties: {
                        height: {
                          type: "object",
                          properties: {
                            meters: { type: "number" },
                            feet: { type: "number" },
                          },
                        },
                        diameter: {
                          type: "object",
                          properties: {
                            meters: { type: "number" },
                            feet: { type: "number" },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            engines: {
              type: "object",
              properties: {
                number: { type: "integer" },
                type: { type: "string" },
                version: { type: "string" },
                layout: { type: "string" },
                isp: {
                  type: "object",
                  properties: {
                    sea_level: { type: "integer" },
                    vacuum: { type: "integer" },
                  },
                },
                engine_loss_max: { type: "integer" },
                propellant_1: { type: "string" },
                propellant_2: { type: "string" },
                thrust_sea_level: {
                  type: "object",
                  properties: {
                    kN: { type: "integer" },
                    lbf: { type: "integer" },
                  },
                },
                thrust_vacuum: {
                  type: "object",
                  properties: {
                    kN: { type: "integer" },
                    lbf: { type: "integer" },
                  },
                },
                thrust_to_weight: { type: "number" },
              },
            },
            landing_legs: {
              type: "object",
              properties: {
                number: { type: "integer" },
                material: { type: "string" },
              },
            },
            flickr_images: {
              type: "array",
              items: { type: "string" },
            },
            wikipedia: { type: "string" },
            description: { type: "string" },
            rocket_id: { type: "string" },
            rocket_name: { type: "string" },
            rocket_type: { type: "string" },
          },
        },
        Launch: {
          type: "object",
          properties: {
            flight_number: { type: "integer" },
            mission_name: { type: "string" },
            mission_id: {
              type: "array",
              items: { type: "string" },
            },
            launch_year: { type: "string" },
            launch_date_unix: { type: "integer" },
            launch_date_utc: { type: "string", format: "date-time" },
            launch_date_local: { type: "string" },
            is_tentative: { type: "boolean" },
            tentative_max_precision: { type: "string" },
            tbd: { type: "boolean" },
            launch_window: { type: "integer" },
            rocket: {
              type: "object",
              properties: {
                rocket_id: { type: "string" },
                rocket_name: { type: "string" },
                rocket_type: { type: "string" },
                first_stage: {
                  type: "object",
                  properties: {
                    cores: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          core_serial: { type: "string" },
                          flight: { type: "integer" },
                          block: { type: "integer" },
                          gridfins: { type: "boolean" },
                          legs: { type: "boolean" },
                          reused: { type: "boolean" },
                          land_success: { type: "boolean" },
                          landing_intent: { type: "boolean" },
                          landing_type: { type: "string" },
                          landing_vehicle: { type: "string" },
                        },
                      },
                    },
                  },
                },
                second_stage: {
                  type: "object",
                  properties: {
                    block: { type: "integer" },
                    payloads: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          payload_id: { type: "string" },
                          norad_id: {
                            type: "array",
                            items: { type: "string" },
                          },
                          reused: { type: "boolean" },
                          customers: {
                            type: "array",
                            items: { type: "string" },
                          },
                          nationality: { type: "string" },
                          manufacturer: { type: "string" },
                          payload_type: { type: "string" },
                          payload_mass_kg: { type: "integer", nullable: true },
                          payload_mass_lbs: { type: "integer", nullable: true },
                          orbit: { type: "string" },
                          orbit_params: {
                            type: "object",
                            properties: {
                              reference_system: { type: "string" },
                              regime: { type: "string" },
                              longitude: { type: "integer", nullable: true },
                              semi_major_axis_km: {
                                type: "integer",
                                nullable: true,
                              },
                              eccentricity: { type: "integer", nullable: true },
                              periapsis_km: { type: "integer", nullable: true },
                              apoapsis_km: { type: "integer", nullable: true },
                              inclination_deg: { type: "number" },
                              period_min: { type: "integer", nullable: true },
                              lifespan_years: { type: "integer" },
                              epoch: { type: "string", nullable: true },
                              mean_motion: { type: "integer", nullable: true },
                              raan: { type: "integer", nullable: true },
                              arg_of_pericenter: {
                                type: "integer",
                                nullable: true,
                              },
                              mean_anomaly: { type: "integer", nullable: true },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                fairings: {
                  type: "object",
                  properties: {
                    reused: { type: "boolean" },
                    recovery_attempt: { type: "boolean" },
                    recovered: { type: "boolean" },
                    ship: { type: "string", nullable: true },
                  },
                },
              },
            },
            ships: {
              type: "array",
              items: { type: "string" },
            },
            telemetry: {
              type: "object",
              properties: {
                flight_club: { type: "string", nullable: true },
              },
            },
            launch_site: {
              type: "object",
              properties: {
                site_id: { type: "string" },
                site_name: { type: "string" },
                site_name_long: { type: "string" },
              },
            },
            launch_success: { type: "boolean" },
            links: {
              type: "object",
              properties: {
                mission_patch: { type: "string" },
                mission_patch_small: { type: "string" },
                reddit_campaign: { type: "string" },
                reddit_launch: { type: "string" },
                reddit_recovery: { type: "string", nullable: true },
                reddit_media: { type: "string" },
                presskit: { type: "string" },
                article_link: { type: "string" },
                wikipedia: { type: "string" },
                video_link: { type: "string" },
                youtube_id: { type: "string" },
                flickr_images: {
                  type: "array",
                  items: { type: "string" },
                },
              },
            },
            details: { type: "string" },
            upcoming: { type: "boolean" },
            static_fire_date_utc: { type: "string", format: "date-time" },
            static_fire_date_unix: { type: "integer" },
            timeline: {
              type: "object",
              properties: {
                webcast_liftoff: { type: "integer" },
                go_for_prop_loading: { type: "integer" },
                rp1_loading: { type: "integer" },
                stage1_lox_loading: { type: "integer" },
                stage2_lox_loading: { type: "integer" },
                engine_chill: { type: "integer" },
                prelaunch_checks: { type: "integer" },
                propellant_pressurization: { type: "integer" },
                go_for_launch: { type: "integer" },
                ignition: { type: "integer" },
                liftoff: { type: "integer" },
                maxq: { type: "integer" },
                stage_sep: { type: "integer" },
                second_stage_ignition: { type: "integer" },
                fairing_deploy: { type: "integer" },
                first_stage_landing: { type: "integer" },
              },
            },
            crew: { type: "array", items: { type: "string" }, nullable: true },
          },
        },
        Flight: {
          type: "object",
          properties: {
            flight_number: { type: "integer" },
            mission_name: { type: "string" },
            rocket: {
              $ref: "#/components/schemas/Flight_Rocket",
            },
            payloads: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Flight_Payload",
              },
            },
          },
        },
        Flight_Rocket: {
          type: "object",
          properties: {
            rocket_id: { type: "string" },
            rocket_name: { type: "string" },
            description: { type: "string" },
            images: { type: "array", items: { type: "string" } },
          },
        },
        Flight_Payload: {
          type: "object",
          properties: {
            payload_id: { type: "string" },
            manufacturer: { type: "string" },
            type: { type: "string" },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  console.log("Swagger Docs disponibles en /api-docs");
};
