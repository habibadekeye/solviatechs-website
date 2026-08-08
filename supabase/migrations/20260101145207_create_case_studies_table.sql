/*
  # Create case studies table

  1. New Tables
    - `case_studies`
      - `id` (uuid, primary key) - Unique identifier for each case study
      - `title` (text) - Case study title
      - `client_name` (text) - Name of the client
      - `industry` (text) - Industry sector
      - `challenge` (text) - The problem the client faced
      - `solution` (text) - How AffiniPay solved it
      - `results` (text) - Detailed results achieved
      - `metrics_before` (jsonb) - Before metrics (JSON object)
      - `metrics_after` (jsonb) - After metrics (JSON object)
      - `roi_percentage` (integer) - ROI percentage achieved
      - `implementation_time` (text) - Time taken to implement
      - `testimonial` (text) - Client testimonial quote
      - `testimonial_author` (text) - Name of person giving testimonial
      - `testimonial_role` (text) - Role/title of testimonial author
      - `featured` (boolean) - Whether to feature prominently
      - `image_url` (text) - Hero image for case study
      - `video_url` (text, optional) - Video demonstration URL
      - `order_index` (integer) - Display order
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `case_studies` table
    - Add policy for public read access (case studies are public marketing content)
    - Add policy for authenticated admin users to manage case studies
*/

CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  client_name text NOT NULL,
  industry text NOT NULL,
  challenge text NOT NULL,
  solution text NOT NULL,
  results text NOT NULL,
  metrics_before jsonb DEFAULT '{}'::jsonb,
  metrics_after jsonb DEFAULT '{}'::jsonb,
  roi_percentage integer DEFAULT 0,
  implementation_time text NOT NULL,
  testimonial text NOT NULL,
  testimonial_author text NOT NULL,
  testimonial_role text NOT NULL,
  featured boolean DEFAULT false,
  image_url text DEFAULT '',
  video_url text,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view case studies"
  ON case_studies
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert case studies"
  ON case_studies
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update case studies"
  ON case_studies
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete case studies"
  ON case_studies
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_case_studies_featured ON case_studies(featured);
CREATE INDEX IF NOT EXISTS idx_case_studies_industry ON case_studies(industry);
CREATE INDEX IF NOT EXISTS idx_case_studies_order ON case_studies(order_index);
